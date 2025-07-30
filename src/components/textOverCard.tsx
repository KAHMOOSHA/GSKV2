import React from 'react';
import { nunito } from '@/app/fonts';

interface TextOverCardProps {
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  imageUrl: string;
  textAlign?: 'left' | 'center' | 'right';
  className?: string;

  buttonBg?: string;
  buttonHoverBg?: string;
}

const TextOverCard: React.FC<TextOverCardProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
  imageUrl,
  textAlign = 'left',
  className = '',

  buttonBg = 'bg-indigo-600',
  buttonHoverBg = 'bg-indigo-800',
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <section className={`relative py-16 md:py-24 min-h-[500px] lg:min-h-[600px] overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={imageUrl} alt="Card background" className="w-full h-full object-cover" />
        {/* Gradient overlay from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/60 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative w-full max-w-7xl px-4 mx-auto">
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className={`w-full flex flex-col ${alignmentClasses[textAlign]} gap-8 p-8 md:p-10  rounded-3xl`}>
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-3xl sm:text-4xl font-bold leading-normal">{title}</h2>
              <p className={`${nunito.className} text-white text-base font-nunito md:text-lg leading-relaxed`}>
                {description}
              </p>
            </div>

            {buttonText && (
              <button
                onClick={onButtonClick}
                className={`w-full sm:w-fit px-6 py-3 ${buttonBg} hover:${buttonHoverBg} transition-all duration-300 rounded-lg shadow-md`}
              >
                <span className="text-white text-sm md:text-base font-medium">{buttonText}</span>
              </button>
            )}
          </div>

          {/* Empty div to maintain grid layout */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default TextOverCard;
