import { DONATION_URL } from '@/constant';
import { ColumnLayout } from './column-layout';

export default function GazaAid() {
  return (
    <ColumnLayout
      imageSrc="/IMG-20250530-WA0008.webp"
      imageAlt="Gaza humanitarian activity"
      title="PALESTINIANS IN GAZA NEED YOUR HELP NOW"
      description="Your support fuels our mission. Every donation brings us closer to a hunger-free Gaza."
      buttonText="Support Us"
      buttonLink={DONATION_URL}
      imagePosition="left"
    />
  );
}
