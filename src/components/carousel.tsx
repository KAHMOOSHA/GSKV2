'use client';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface CarouselProps {
  imagePaths: string[]; // Array of image paths
  altTexts?: string[]; // Optional alt texts for images
  width?: number; // Image width
  height?: number; // Image height
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  showDots?: boolean;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  imagePaths,
  altTexts = [],
  width = 1200,
  height = 800,
  autoPlay = false,
  interval = 10000,
  showControls = true,
  showDots = true,
  className = '',
}) => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex(([prevIndex]) => [
      (prevIndex + 1) % imagePaths.length,
      1, // Direction (1 = forward)
    ]);
  }, [imagePaths.length]);

  const prevSlide = () => {
    setCurrentIndex(([prevIndex]) => [
      (prevIndex - 1 + imagePaths.length) % imagePaths.length,
      -1, // Direction (-1 = backward)
    ]);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(([prevIndex]) => [
      index,
      index > prevIndex ? 1 : -1, // Determine direction
    ]);
  };

  // Handle swipe gestures
  const handleDragEnd = (_: any, { offset, velocity }: PanInfo) => {
    const swipeThreshold = 100;
    const swipePower = (offset.x * velocity.x) / 10000;

    if (swipePower < -swipeThreshold) {
      nextSlide();
    } else if (swipePower > swipeThreshold) {
      prevSlide();
    }
  };

  // Auto-play
  useEffect(() => {
    if (!autoPlay || isPaused) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, isPaused, nextSlide]);

  // Variants for smooth animations
  const variants = {
    enter: (direction: number) => ({
      x: `${direction * 100}%`,
      opacity: 0.5,
    }),
    center: {
      x: '0%',
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: `${direction * -100}%`,
      opacity: 0.5,
    }),
  };

  return (
    <div
      className={`relative w-[90%] lg:w-[70%] aspect-video rounded-xl overflow-hidden  ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { stiffness: 200, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className="absolute w-full h-full"
        >
          <Image
            src={imagePaths[currentIndex]}
            alt={altTexts[currentIndex] || `Carousel image ${currentIndex + 1}`}
            width={width}
            height={height}
            className="w-full h-full object-cover"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {showControls && imagePaths.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70  hover:bg-black/50 text-white p-3 rounded-full shadow-lg transition-all z-10 "
            aria-label="Previous slide"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70  hover:bg-black/50 text-white p-3 rounded-full shadow-lg transition-all z-10 "
            aria-label="Next slide"
          >
            <ChevronRightIcon />
          </button>
        </>
      )}

      {showDots && imagePaths.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {imagePaths.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default Carousel;
