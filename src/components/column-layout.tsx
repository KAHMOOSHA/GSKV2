import Image from 'next/image';
import { Button } from './button';
import UnderlinedHeading from './underlinedHeading';

type ColumnLayoutProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  imagePosition: 'left' | 'right';
};

export function ColumnLayout({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  buttonLink,
  imagePosition,
}: ColumnLayoutProps) {
  return (
    <section className="bg-[rgb(223,242,222)] py-4 min-h-[80vh] my-8 shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.05)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col-reverse lg:flex-row items-center ${
            imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
          } gap-10`}
        >
          <div className="w-full lg:w-1/2 h-100 ">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={640}
              height={700}
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="w-full lg:w-1/2 h-full">
            <UnderlinedHeading text={title}></UnderlinedHeading>
            <p className="text-black text-start sm:text-lg md:text-xl leading-relaxed mb-6">{description}</p>
            {buttonText && buttonLink && (
              <Button
                as="a"
                href={buttonLink}
                target={buttonLink !== '/about' ? '_blank' : undefined}
                className="relative inline-block py-3 px-6 bg-[#2A8C61] text-white font-semibold text-base sm:text-lg rounded-lg overflow-hidden   hover:bg-[#246d52] transition-colors"
              >
                {buttonText}
                <div
                  className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-donation-shine"
                  style={{ transform: 'skewX(-20deg)' }}
                />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
