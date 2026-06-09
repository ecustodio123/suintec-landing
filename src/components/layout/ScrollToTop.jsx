import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const scrollToSection = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };
      // Wait for the destination page to render before scrolling.
      const timer = setTimeout(scrollToSection, 60);
      return () => clearTimeout(timer);
    }

    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
