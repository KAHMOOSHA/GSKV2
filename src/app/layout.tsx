// import { getGlobalData } from '@/actions/strapi';
import { merriweather } from '@/app/fonts';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import type { Metadata } from 'next';
import Navbar from '../components/navbar';
import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  // const { data } = await getGlobalData();

  return {
    title: {
      template: '%s - Gaza Soup Kitchen',
      default: 'Home - Gaza Soup Kitchen',
    },
    description:
      "Our goal is clear: to ensure no one in Gaza goes to bed hungry. This is more than just an initiative, it's a personal vow. Don't wait, donate to Palestine Now.",
    applicationName: 'Gaza Soup Kitchen',
    authors: [{ name: 'Gaza Soup Kitchen' }],
    keywords: [
      'Gaza Food Aid',
      'Humanitarian Relief',
      'Food Distribution',
      'Emergency Support',
      'Palestine Aid',
      'Food Security',
      'Humanitarian Crisis',
      'Food Assistance',
      'Aid Organization',
      'Emergency Relief',
    ],
    generator: 'Gaza Soup Kitchen',
    creator: 'Gaza Soup Kitchen',
    publisher: 'Gaza Soup Kitchen',
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} antialiased`}>
        <Navbar />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
