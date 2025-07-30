'use client';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { nunito } from '@/app/fonts';
import { playwrite } from '@/app/fonts';


type InMemorySectionProps = {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
  className?: string;
};

export default function InMemorySection({
  imageSrc,
  imageAlt = 'Section image',
  title,
  description,
  className,
}: InMemorySectionProps) {
  return (
    <section className={cn('w-full py-16 md:py-24 flex justify-center', className)}>
      <div className="flex flex-col items-center max-w-xl px-4 text-center">
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mb-6 ">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 20rem, 100vw"
            className="object-cover rounded-xl shadow-2xl "
            priority
          />
        </div>
        <h1 className={` ${playwrite.className} text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4`}>{title}</h1>
        <p className={` ${nunito.className} text-base sm:text-lg text-gray-600 leading-relaxed `}>{description}</p>
      </div>
    </section>
  );
}
