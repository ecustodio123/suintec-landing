import { useEffect, useRef } from "react";

function LogoCarousel({ logos, label }) {
  const loop = [...logos, ...logos];
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const state = useRef({ raf: 0, paused: false, dragging: false, startX: 0, startScroll: 0, half: 0, moved: false });

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) {
      return undefined;
    }

    const s = state.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const speed = 0.5;

    const computeHalf = () => {
      s.half = track.scrollWidth / 2;
    };
    computeHalf();

    const resizeObserver = new ResizeObserver(computeHalf);
    resizeObserver.observe(track);

    const tick = () => {
      if (!reduceMotion && !s.paused && !s.dragging && s.half > 0) {
        let next = viewport.scrollLeft + speed;
        if (next >= s.half) {
          next -= s.half;
        }
        viewport.scrollLeft = next;
      }
      s.raf = requestAnimationFrame(tick);
    };
    s.raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(s.raf);
      resizeObserver.disconnect();
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
    s.moved = false;
    s.startX = event.clientX;
    s.startScroll = viewportRef.current.scrollLeft;
    viewportRef.current.setPointerCapture?.(event.pointerId);
    viewportRef.current.classList.add("dragging");
  };

  const handlePointerMove = (event) => {
    const s = state.current;
    if (!s.dragging) {
      return;
    }
    const delta = event.clientX - s.startX;
    if (Math.abs(delta) > 3) {
      s.moved = true;
    }
    let next = s.startScroll - delta;
    if (s.half > 0) {
      next = ((next % s.half) + s.half) % s.half;
    }
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
