import ContactBlock from "../components/blocks/ContactBlock";
import HeroBlock from "../components/blocks/HeroBlock";
import HomeAboutTeaserBlock from "../components/blocks/HomeAboutTeaserBlock";
import HomeCtaStripBlock from "../components/blocks/HomeCtaStripBlock";
import ServicesBlock from "../components/blocks/ServicesBlock";
import ServicesBlock2 from "../components/blocks/ServicesBlock2";
import WhyChooseUsBlock from "../components/blocks/WhyChooseUsBlock";

function HomePage() {
  return (
    <main>
      <HeroBlock />
      <HomeAboutTeaserBlock />
      <ServicesBlock />
      <ServicesBlock2 sectionClassName="surface-section surface-section--soft" showSupport={false} showAllServicesLink={false} />
      <WhyChooseUsBlock />
      <HomeCtaStripBlock />
      <ContactBlock />
    </main>
  );
}

export default HomePage;
