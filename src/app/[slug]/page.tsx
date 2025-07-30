// import { getDynamicPage } from '@/actions/strapi';
import AboutPage from '@/app/pages/about-page';
import ContactPage from '@/app/pages/contact-page';
import DonatePage from '@/app/pages/donate-page';
import { GalleryPage } from '@/app/pages/gallery-page';
import MediaPage from '@/app/pages/media-page';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const capitalizedSlug = slug.charAt(0).toUpperCase() + slug.slice(1);

  return {
    title: capitalizedSlug,
  };
}

export async function generateStaticParams() {
  return [{ slug: 'about' }, { slug: 'gallery' }, { slug: 'media' }, { slug: 'donation' }];
}

export default async function Dynamic({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === 'gallery') {
    return <GalleryPage />;
  }

  if (slug === 'donation') {
    return <DonatePage />;
  }

  if (slug === 'media') {
    return <MediaPage />;
  }

  if (slug === 'about') {
    return <AboutPage />;
  }

  if (slug === 'contact') {
    return <ContactPage />;
  }

  return <></>;
}
