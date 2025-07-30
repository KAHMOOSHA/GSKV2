'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import UnderlinedHeading from './underlinedHeading';

const slugImageMap: Record<string, { src: string; alt: string }> = {
  about: { src: '/hero/IMG-20250705-WA0032.webp', alt: 'About Us Hero' },
  contact: { src: '/hero/IMG-20250705-WA0032.webp', alt: 'Contact Us Hero' },
  media: { src: '/hero/IMG-20250611-WA0333.webp', alt: 'Our Work Hero' },
  // Add more mappings as needed
};

export default function Hero() {
  const { slug } = useParams();

  const fallbackImage = {
    src: '/hero/hero.jpeg',
    alt: 'Children in need',
  };

  const imageData = slug && slugImageMap[slug as string] ? slugImageMap[slug as string] : fallbackImage;

  return (
    <section className="relative h-[100dvh] flex items-end shadow-md">
      <Image
        src={imageData.src}
        alt={imageData.alt}
        className="brightness-75 object-cover lg:object-[0%_35%]"
        fill
        priority
        sizes="100vw"
        quality={100}
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pb-12">
        <div className={cn({ 'text-center': slug })}>
          {slug ? (
            <UnderlinedHeading
              text={slug as string}
              align="center"
              className="capitalize font-bold font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 mb-3 tracking-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]"
            />
          ) : (
            <div className="max-w-2xl text-white">
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed drop-shadow-md mb-6"
              >
                <span className="block text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
                  Through every hardship,
                </span>
                our pots keep boiling, our doors stay open, and our meals bring hope to those who need it most.
              </motion.p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
