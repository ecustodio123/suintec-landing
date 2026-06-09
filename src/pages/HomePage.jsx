import { useEffect } from "react";
import ApplicationsBlock from "../components/blocks/ApplicationsBlock";
import ContactBlock from "../components/blocks/ContactBlock";
import CoverageBlock from "../components/blocks/CoverageBlock";
import FaqBlock from "../components/blocks/FaqBlock";
import HeroBlock from "../components/blocks/HeroBlock";
import HomeAboutTeaserBlock from "../components/blocks/HomeAboutTeaserBlock";
import HomeCtaStripBlock from "../components/blocks/HomeCtaStripBlock";
import ProcessBlock from "../components/blocks/ProcessBlock";
import SolutionsBlock from "../components/blocks/SolutionsBlock";
import StatsBlock from "../components/blocks/StatsBlock";
import TestimonialsBlock from "../components/blocks/TestimonialsBlock";
import TrustBar from "../components/blocks/TrustBar";
import WhyChooseUsBlock from "../components/blocks/WhyChooseUsBlock";

function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <HeroBlock />
      <TrustBar />
      <HomeAboutTeaserBlock />
      <StatsBlock />
      <ApplicationsBlock />
      <SolutionsBlock />
      <ProcessBlock />
      <WhyChooseUsBlock />
      <TestimonialsBlock />
      <CoverageBlock />
      <FaqBlock />
      <HomeCtaStripBlock />
      <ContactBlock />
    </main>
  );
}

export default HomePage;
