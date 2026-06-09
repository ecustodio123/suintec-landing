import { useEffect, useRef, useState } from "react";
import { useI18n } from "../../lang/i18n";

const STATS = [
  { key: "experience", value: 5, duration: 1500 },
  { key: "brands", value: 15, duration: 2000 },
  { key: "equipment", value: 500, duration: 2500 },
];

function useCountUp(target, duration, active) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      return undefined;
    }

    let raf;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, active]);

  return value;
}

function Stat({ value, duration, label, active }) {
  const current = useCountUp(value, duration, active);

  return (
    <div className="stat reveal">
      <span className="stat-number">{current}+</span>
      <span className="stat-label">{label}</span>
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
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section">
      <div className="wrap">
        <div className="stats-grid" ref={ref}>
          {STATS.map((stat) => (
            <Stat key={stat.key} value={stat.value} duration={stat.duration} active={active} label={t(`stats.${stat.key}`)} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsBlock;
