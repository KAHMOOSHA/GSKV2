import GetInvolved from '@/components/get-involved';

import Media from '@/components/media';
import About from '@/components/about';
import HelpSection from '@/components/help-section';
import { SectionRenderer } from '@/components/section-renderer';
import { SectionData } from '@/types';
import MerchSection from '@/components/merch-section';
import Gallery from '@/components/gallery';
import GazaAid from '@/components/gaza-aid';
import { DONATION_URL } from '@/constant';
import { ColumnLayout } from '@/components/column-layout';

export default async function Home() {
  // const { data } = await fetchLandingPage();

  return (
    <>
      {/* {data.sections.map((section: SectionData) => (
        <SectionRenderer key={section.__component} section={section} />
      ))} */}
      <ColumnLayout
        imageSrc="/gaza-kid.webp"
        imageAlt="Gaza humanitarian activity"
        title="Our Mission"
        description="Right now in Gaza, every bite is a story of resilience and hope. Your contribution extends far beyond nourishment—it’s a lifeline, a promise of better days. Stand with us in this mission of compassion and dignity. Your donation is their tomorrow. Act now."
        buttonText="Support Us"
        buttonLink={DONATION_URL}
        imagePosition="left"
      />
      <GetInvolved />
      <Media />
      <About />
      <HelpSection />
      <GazaAid />
      <Gallery />
      <MerchSection />
    </>
  );
}
