import { useEffect, useRef, useState } from "react";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";

const STATS = [
  { key: "experience", value: 5 },
  { key: "brands", value: 15 },
  { key: "equipment", value: 500 },
];

const DURATION = 2000;

function useCountUp(target, active) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      return undefined;
    }

    let raf;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);

  return value;
}

function StatItem({ value, label, active }) {
  const current = useCountUp(value, active);

  return (
    <div className="stat-item">
      <span className="stat-item__value">{current}+</span>
      <span className="stat-item__label">{label}</span>
    </div>
  );
}

function StatsBlock() {
  const { t } = useI18n();
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-band" ref={ref}>
      <Container className="stats-grid">
        {STATS.map((stat) => (
          <StatItem key={stat.key} value={stat.value} active={active} label={t(`stats.${stat.key}`)} />
        ))}
      </Container>
    </section>
  );
}

export default StatsBlock;
