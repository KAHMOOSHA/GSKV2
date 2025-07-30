'use client';
import { useImageModal } from '@/hooks/use-image-modal';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import UnderlinedHeading from './underlinedHeading';

const GALLERY = [
  {
    id: 1,
    name: 'gallery/IMG-20250527-WA0226.webp',
    alternativeText: 'Image description 1',
    width: 400,
    height: 300,
  },
  {
    id: 2,
    name: 'gallery/IMG-20250527-WA0333.webp',
    alternativeText: 'Image description 2',
    width: 400,
    height: 300,
  },
  {
    id: 3,
    name: 'gallery/IMG-20250529-WA0121.webp',
    alternativeText: 'Image description 3',
    width: 400,
    height: 300,
  },
  {
    id: 4,
    name: 'gallery/IMG-20250530-WA0008.webp',
    alternativeText: 'Image description 4',
    width: 400,
    height: 300,
  },
  {
    id: 5,
    name: 'gallery/IMG-20250604-WA0040.webp',
    alternativeText: 'Image description 5',
    width: 400,
    height: 300,
  },
  {
    id: 6,
    name: 'gallery/IMG-20250605-WA0072.webp',
    alternativeText: 'Image description 6',
    width: 400,
    height: 300,
  },
  {
    id: 7,
    name: 'gallery/IMG-20250612-WA0178.webp',
    alternativeText: 'Image description 7',
    width: 400,
    height: 300,
  },
  {
    id: 8,
    name: 'gallery/IMG-20250612-WA0411(1).webp',
    alternativeText: 'Image description 8',
    width: 400,
    height: 300,
  },
];

export default function Gallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { selectedImage, openModal, closeModal } = useImageModal();

  return (
    <section className="py-16 lg:py-32">
      <div className="container mx-auto px-4">
        <UnderlinedHeading text="Our Gallery" align='center'></UnderlinedHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => openModal(item.name)}
            >
              <Image
                src={'/' + item.name}
                alt={item.alternativeText}
                width={item.width}
                height={item.height}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="relative max-w-full max-h-[80vh] p-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="max-w-full max-h-[80vh]"
              >
                <Image
                  src={'/' + selectedImage}
                  alt="Enlarged view"
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full"
              onClick={closeModal}
              aria-label="Close lightbox"
            >
              <IoMdClose size={24} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
