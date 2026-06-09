import { useEffect, useRef } from "react";

const SPEED_PX_PER_SEC = 45;

function LogoCarousel({ logos, label }) {
  const loop = [...logos, ...logos];
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const state = useRef({
    raf: 0,
    paused: false,
    dragging: false,
    startX: 0,
    startPos: 0,
    pos: 0,
    half: 0,
    last: 0,
  });

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) {
      return undefined;
    }

    const s = state.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const computeHalf = () => {
      s.half = track.scrollWidth / 2;
    };
    computeHalf();

    const resizeObserver = new ResizeObserver(computeHalf);
    resizeObserver.observe(track);

    const wrap = (value) => {
      if (s.half <= 0) {
        return value;
      }
      return ((value % s.half) + s.half) % s.half;
    };

    const tick = (now) => {
      const dt = s.last ? Math.min(now - s.last, 64) : 16;
      s.last = now;

      if (!reduceMotion && !s.paused && !s.dragging && s.half > 0) {
        s.pos = wrap(s.pos + (SPEED_PX_PER_SEC * dt) / 1000);
        viewport.scrollLeft = s.pos;
      }
      s.raf = requestAnimationFrame(tick);
    };
    s.raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(s.raf);
      resizeObserver.disconnect();
      s.last = 0;
    };
  }, [logos]);

  const handleEnter = () => {
    state.current.paused = true;
  };

  const handleLeave = () => {
    if (!state.current.dragging) {
      state.current.paused = false;
    }
  };

  const handlePointerDown = (event) => {
    const s = state.current;
    s.dragging = true;
    s.paused = true;
    s.startX = event.clientX;
    s.startPos = s.pos;
    viewportRef.current.setPointerCapture?.(event.pointerId);
    viewportRef.current.classList.add("dragging");
  };

  const handlePointerMove = (event) => {
    const s = state.current;
    if (!s.dragging) {
      return;
    }
    let next = s.startPos - (event.clientX - s.startX);
    if (s.half > 0) {
      next = ((next % s.half) + s.half) % s.half;
    }
    s.pos = next;
    viewportRef.current.scrollLeft = next;
  };

  const endDrag = (event) => {
    const s = state.current;
    if (!s.dragging) {
      return;
    }
    s.dragging = false;
    s.paused = false;
    viewportRef.current.releasePointerCapture?.(event.pointerId);
    viewportRef.current.classList.remove("dragging");
  };

  return (
    <div className="brands">
      <span className="brands-label">{label}</span>
      <div
        className="marquee"
        ref={viewportRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div className="marquee-track" ref={trackRef}>
          {loop.map((logo, index) => (
            <div className="logo-chip" key={`${logo.name}-${index}`}>
              <img src={logo.src} alt={logo.name} loading="lazy" draggable="false" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoCarousel;
