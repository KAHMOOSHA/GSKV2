import { ColumnLayout } from './column-layout';

export default function About() {
  return (
    <ColumnLayout
      imageSrc="/MAHMOUD-ALMADHOUN.webp"
      imageAlt="Gaza humanitarian activity"
      title="About Gaza Soup Kitchen"
      description="Chef Mahmoud, who always ended his videos by thanking his friends in the United States and signing off with the Arabic word “Mostamreen” (مستمرين) 💪, meaning “we will continue,” left a legacy of resilience and hope. His spirit lives on through our family and friends who now manage the different locations for us across North and South Gaza."
      buttonText="Read More"
      buttonLink="/about"
      imagePosition="right"
    />
  );
}
