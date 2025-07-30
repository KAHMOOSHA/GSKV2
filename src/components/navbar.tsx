'use client';
import { DONATION_URL, NAV_ITEMS } from '@/constant';
import { useOutsideClick } from '@/hooks/use-outside';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Button } from './button';

const menuVariants = {
  closed: { opacity: 0, height: 0, transformOrigin: 'top center' },
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      opacity: { duration: 0.3 },
      height: { duration: 0.4, ease: 'easeOut' },
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      opacity: { duration: 0.2 },
      height: { duration: 0.3, ease: 'easeIn' },
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export default function NavbarComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  const navRef = useRef(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNav(true);
      }

      setHasScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Call once on mount to apply background if already scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  useOutsideClick(navRef, (event) => {
    if (mobileMenuOpen && menuButtonRef.current && !menuButtonRef.current.contains(event.target as Node)) {
      setMobileMenuOpen(false);
    }
  });

  const handleNavigation = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn('fixed top-0 left-0 right-0 w-full z-50 transition-transform duration-500 ease-in-out ', {
        'translate-y-0': showNav,
        '-translate-y-full': !showNav,
      })}
    >
      <div
        id="sticky-header"
        className={cn('transition-all duration-500 ease-in-out py-4 px-9 ', {
          'bg-[#127544] shadow-md': hasScrolled || mobileMenuOpen,
          'bg-transparent': !hasScrolled && !mobileMenuOpen,
        })}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="logo">
              <Button href="/" onClick={handleNavigation}>
                <Image
                  src="/gazasoup-logo.webp"
                  alt="Gaza Soup Logo"
                  width={hasScrolled ? 70 : 80}
                  height={hasScrolled ? 70 : 80}
                  className="transition-all duration-500 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
                />
              </Button>
            </div>

            <div className="hidden lg:flex items-center">
              <nav className="mr-6">
                <ul className="flex space-x-3 xl:space-x-6 text-gray-800 text-base xl:text-lg">
                  {NAV_ITEMS.map((item) => (
                    <li
                      key={item.label}
                      className="hover:text-black text-white font-semibold font-sans transition duration-300 ease-in-out"
                    >
                      <Button href={item.link}>{item.label}</Button>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button
                as="a"
                href={DONATION_URL}
                target="_blank"
                className="relative inline-block py-3 px-6 bg-white text-gray-800 font-sans font-semibold text-base no-underline rounded-lg overflow-hidden "
              >
                Donate
                <div
                  className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-donation-shine"
                  style={{ transform: 'skewX(-20deg)' }}
                />
              </Button>
            </div>

            <div className="lg:hidden">
              <button
                ref={menuButtonRef}
                onClick={toggleMobileMenu}
                className="text-gray-800 focus:outline-none p-2"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <AnimatePresence initial={false} mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IoMdClose className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <RxHamburgerMenu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                ref={navRef}
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="exit"
                className={cn('lg:hidden overflow-hidden px-4 transition-colors', {
                  'bg-[#3CC78F] ': mobileMenuOpen,
                })}
              >
                <ul className="flex flex-col space-y-4 text-gray-800 text-lg mt-4 pb-4">
                  {NAV_ITEMS.map((item) => (
                    <motion.li
                      key={item.label}
                      variants={itemVariants}
                      className="hover:text-black text-white font-semibold font-sans transition duration-300 ease-in-out"
                    >
                      <Button href={item.link} onClick={handleNavigation}>
                        {item.label}
                      </Button>
                    </motion.li>
                  ))}
                  <motion.li className="pt-2" variants={itemVariants}>
                    <Button
                      as="a"
                      href={DONATION_URL}
                      target="_blank"
                      className="relative inline-block py-3 px-6 bg-white text-gray-800 font-sans font-semibold text-base no-underline rounded-lg overflow-hidden "
                    >
                      Donate
                      <div
                        className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-donation-shine"
                        style={{ transform: 'skewX(-20deg)' }}
                      />
                    </Button>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Spacer to prevent layout shift */}
      <div className="h-24 sm:h-24 md:h-28 lg:h-32"></div>
    </header>
  );
}
