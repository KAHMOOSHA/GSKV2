'use client';
import Image from 'next/image';
import Counter from './number-counter';
import { DONATION_URL } from '@/constant';
import { Button } from './button';
import { motion } from 'framer-motion';

const CARDS = [
  {
    id: 1,
    title: 'Served Meals',
    image: '/IMG-20250617-WA0053.webp',
    alt: 'Served meals',
    number: '600000',
  },
  {
    id: 2,
    title: 'Donation',
    image: '/IMG-20250622-WA0341.webp',
    alt: 'Donation',
  },
  {
    id: 3,
    title: 'Be a volunteer',
    image: '/help/3.jpg',
    alt: 'Be a volunteer',
  },
];

export default function GetInvolved() {
  return (
    <section className="px-4 mx-auto max-w-7xl py-10 lg:py-12 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CARDS.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-96 w-full">
              <Image src={card.image} alt={card.alt} fill className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-white text-xl sm:text-2xl font-bold mb-2"
                >
                  {card.title}
                </motion.h3>

                {card.number && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <Counter
                      targetValue={+card.number}
                      className="text-white text-2xl sm:text-3xl font-semibold mb-1"
                    />
                  </motion.p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative mt-12">
        <div className="absolute bottom-0 right-0">
          <Button
            as="a"
            href={DONATION_URL}
            target="_blank"
            className="text-[#191d34] text-base sm:text-lg font-bold font-sans relative inline-block pl-[68px] hover:text-[#2A8C61] transition-colors duration-300 ease-in-out"
          >
            <span className="absolute left-0 top-1/2 w-[36px] h-[2px] bg-[#707070] group-hover:bg-[#2A8C61] group-hover:w-[50px] transition-all duration-300 ease-in-out transform -translate-y-1/2" />
            Support Us
          </Button>
        </div>
      </div>
    </section>
  );
}
