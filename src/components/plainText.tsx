import React from 'react';
import { nunito } from '@/app/fonts';

interface PlainTextProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
  textColor?: string;
  leading?: 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
}

const PlainText: React.FC<PlainTextProps> = ({
  children,
  className = '',
  maxWidth = 'md',
  textColor = 'text-gray-700',
  leading = 'normal',
}) => {
  const leadingClasses = {
    tight: 'leading-tight',
    snug: 'leading-snug',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose',
  };

  return (
    <p
      className={`
            ${nunito.className}
            text-center 
            ${textColor} 
            ${leadingClasses[leading]}
            font-normal
            tracking-normal
            transition-all
            duration-300
            lg:text-lg
            md:text-base
            sm:text-sm
            text-justify
            w-[80%]
            py-8 
            px-4 
          `}
    >
      {children}
    </p>
  );
};

export default PlainText;
