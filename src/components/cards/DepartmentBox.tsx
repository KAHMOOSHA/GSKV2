import { LogoLink } from '@/types';
import Image from 'next/image';

export function DepartmentBox({ media }: { media: any }) {
  return (
    <div className="w-full aspect-square group/card ">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={media.href}
        className="relative block w-full h-full rounded-md shadow-xl overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src={'/' + media.image.name}
            alt={media.image.alternativeText || 'Department image'}
            fill
            className="object-cover transition-transform duration-300 group-hover/card:scale-105"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="absolute inset-0  transition-opacity duration-300 group-hover/card:bg-black/10"></div>
      </a>
    </div>
  );
}
