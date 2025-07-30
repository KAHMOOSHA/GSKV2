'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import UnderlinedHeading from './underlinedHeading';

const CARDS = [
  {
    id: 1,
    title: 'Field kitchens',
    image: '/IMG-20250614-WA0151.webp',
    alt: 'Served meals',
    description:
      'Our community kitchens are active across the strip, including Sheikh Ejleen, Al Shati Camp, Saftawy, and the Port—serving thousands of displaced families warm, filling meals made with care.',
  },
  {
    id: 2,
    title: 'Water Deliveries',
    image: '/IMG-20250722-WA0015.webp',
    alt: 'Water deliveris ',
    description:
      'Our water trucks deliver daily to communities in Gaza City, Deir al Balah, Nuseirat, Sheikh Radwan, and the sandy stretches of Mawasi Khan Younis—where clean water is as precious as ever.',
  },
  {
    id: 3,
    title: 'Medical Point',
    image: '/IMG-20250603-WA0376.webp',
    alt: 'Medical Point',
    description:
      'In Gaza City, our medical point provides free consultations, treatment, and medications, supporting those who have nowhere else to turn.',
  },
  {
    id: 4,
    title: 'GSK Class Tent',
    image: '/IMG-20250724-WA0005.webp',
    alt: 'Nurturing Community',
    description:
      'We also run education and child support activities like Miss Fatma’s English class, offering children—many who haven’t seen a classroom in over two years—a space to learn, laugh, and feel safe.',
  },
];

export default function HelpSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="px-4 mx-auto max-w-7xl py-10 lg:py-24">
      <UnderlinedHeading text="Our Helps And Services" align="center" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12">
        {CARDS.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-lg overflow-hidden cursor-pointer aspect-[4/3]"
            onClick={() => toggleCard(card.id)}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="h-full w-full"
            >
              <Image src={card.image} alt={card.alt} fill className="object-cover" />
            </motion.div>

            <div className="absolute inset-0 bg-black/40 flex items-end p-6">
              <div className="w-full">
                {/* Always visible title */}
                <h3 className="text-white text-lg sm:text-xl font-bold mb-2 transition-all duration-300">
                  {card.title}
                </h3>

                <AnimatePresence>
                  {expandedCard === card.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white/90 text-sm sm:text-base overflow-hidden"
                    >
                      {card.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                {expandedCard !== card.id && (
                  <motion.div
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-white/80 text-xs mt-2"
                  >
                    ...
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
