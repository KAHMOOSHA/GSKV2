import { SocialIcons } from '@/types';
import Image from 'next/image';
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaBluesky, FaSquareFacebook } from 'react-icons/fa6';
import { Button } from './button';
import { NAV_ITEMS } from '@/constant';

function renderIcon(text: string) {
  switch (text) {
    case SocialIcons.FACEBOOK:
      return <FaSquareFacebook size={20} className="hover:text-[#3CC78F] transition-colors duration-300" />;
    case SocialIcons.INSTAGRAM:
      return <FaInstagramSquare size={20} className="hover:text-[#3CC78F] transition-colors duration-300" />;
    case SocialIcons.LINKEDIN:
      return <FaLinkedin size={20} className="hover:text-[#3CC78F] transition-colors duration-300" />;
    case SocialIcons.BLUESKY:
      return <FaBluesky size={20} className="hover:text-[#3CC78F] transition-colors duration-300" />;
    default:
      return null;
  }
}

const Footer = () => {
  return (
    <footer className="bg-red-100 border-t border-[#e0e0e0] pt-10 pb-6 mt-12 shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 mb-10">
          {/* Logo and Description */}
          <div className="flex flex-col gap-3">
            <Button href="/" className="inline-block mb-4">
              <Image src="/gazasoup-logo.webp" alt="Gaza Soup Kitchen" width={50} height={50} className="h-auto" />
            </Button>
            <p className="text-gray-600 text-sm max-w-xs">
              Providing hot meals and essential support to those in need throughout Gaza.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {NAV_ITEMS.map((item) => (
                <Button
                  as="a"
                  key={item.label}
                  href={item.link}
                  className="text-gray-600 hover:text-[#3CC78F] transition-colors duration-300 text-sm"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#3CC78F]/20 my-6" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Gaza Soup Kitchen. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            {[
              { label: SocialIcons.FACEBOOK, href: 'https://www.facebook.com/people/Gaza-Soup-Kitchen/61566140846121' },
              { label: SocialIcons.INSTAGRAM, href: 'https://www.instagram.com/gazasoupkitchen' },
              { label: SocialIcons.LINKEDIN, href: 'https://www.linkedin.com/company/gaza-soup-kitchen/' },
              { label: SocialIcons.BLUESKY, href: 'https://bsky.app/profile/gazasoupkitchen.bsky.social' },
            ].map((item) => (
              <Button
                as="a"
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-[#3CC78F] transition-colors duration-300"
                aria-label={item.label}
              >
                {renderIcon(item.label)}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
