'use client';
import Image from 'next/image';
import Counter from './number-counter';
import { DONATION_URL } from '@/constant';
import { Button } from './button';
import { motion } from 'framer-motion';
import UnderlinedHeading from './underlinedHeading';

const CARDS = [
  {
    id: 1,
    title: 'Served Meals',
    image: '/help/2.jpg',
    alt: 'Served meals',
    number: '500000',
    description: 'Serving fresh hot meals everyday',
  },
  {
    id: 2,
    title: 'Donation',
    image: '/help/1.jpg',
    alt: 'Donation',
    description: 'Your donation provides essential meals to children in need.',
  },
  {
    id: 3,
    title: 'Be a volunteer',
    image: '/help/3.jpg',
    alt: 'Be a volunteer',
    description: 'Even the all-powerful Pointing has no control about the blind texts.',
  },
];

export default function GetInvolved() {
  return (
    <section className="px-4 mx-auto max-w-7xl py-10 lg:py-12  rounded-xl ">
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
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-white text-sm sm:text-base"
                >
                  {card.number ? (
                    <>
                      <Counter
                        targetValue={+card.number}
                        className="text-white text-2xl sm:text-3xl font-semibold mb-1"
                      />
                      <span>{card.description}</span>
                    </>
                  ) : (
                    card.description
                  )}
                </motion.p>
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
