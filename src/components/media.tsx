import { DepartmentBox } from './cards/DepartmentBox';
import UnderlinedHeading from './underlinedHeading';

const MEDIA_DATA = [
  {
    id: 1,
    label: 'Gaza Soup Kitchen',
    href: '',
    image: {
      name: 'Gaza-Soup-Kitchen.webp',
      alternativeText: 'Gaza Soup Kitchen',
      width: 400,
      height: 300,
    },
  },
  {
    id: 2,
    label: 'Gaza Soup Kitchen 2',
    href: '',
    image: {
      name: 'Gaza-Soup-Kitchen-2.webp',
      alternativeText: 'Gaza Soup Kitchen 2',
      width: 400,
      height: 300,
    },
  },
  {
    id: 3,
    label: 'Gaza Soup Kitchen 3',
    href: '',
    image: {
      name: 'Gaza-Soup-Kitchen-3.png',
      alternativeText: 'Gaza Soup Kitchen 3',
      width: 400,
      height: 300,
    },
  },
];

export default function Media() {
  // { data }: { data: AboutSection }
  return (
    <section className="px-4 mx-auto max-w-7xl py-10 lg:py-14">
      <UnderlinedHeading text="Our Departments" align="center"></UnderlinedHeading>
      <div className="flex flex-col md:flex-row gap-6 p-16">
        {MEDIA_DATA.map((media) => (
          <DepartmentBox key={media.label} media={media} />
        ))}
      </div>
    </section>
  );
}
