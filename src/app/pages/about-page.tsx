'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { DONATION_URL } from '../../constant';
import { Button } from '../../components/button';
import UnderlinedHeading from '../../components/underlinedHeading';
import TextOverCard from '../../components/textOverCard';
import PlainText from '../../components/plainText';
import Carousel from '../../components/carousel';
import { nunito } from '@/app/fonts';
import InMemorySection from '@/components/InMemorySection';

export default function AboutPage() {
  const slides = [
    <motion.div
      key={1}
      className="w-full h-64 md:h-96 bg-blue-500 flex items-center justify-center"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-white text-2xl">Slide 1</h2>
    </motion.div>,
    <motion.div
      key={2}
      className="w-full h-64 md:h-96 bg-blue-500 flex items-center justify-center"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-white text-2xl">Slide 2</h2>
    </motion.div>,
    <motion.div
      key={3}
      className="w-full h-64 md:h-96 bg-blue-500 flex items-center justify-center"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-white text-2xl">Slide 3</h2>
    </motion.div>,
  ];
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-8 min-h-screen rounded-md py-16 ">
        <TextOverCard
          title="My name is Hani Almadhoun."
          description="Seeing family and friends in Gaza suffer from hunger due to the blockade opened my eyes to their daily struggle. We  couldn’t stay idle—watching loved ones starve drove us to act. Our  mission is simple: no one in our community should go to bed hungry. This isn’t just an initiative; 
it’s a personal vow."
          onButtonClick={() => console.log('Clicked')}
          imageUrl="/photo_5990250695607043897_y.webp"
          textAlign="left"
        />

        <PlainText>
          In response to the crisis, my brother Mahmoud and his friends took a bold step; they started a soup kitchen in
          Bait Lahia. With just four large pots, some wood for fire, and essential ingredients, they began preparing hot
          meals for our neighbors. That first day, we fed 120 families. It was a modest beginning, but it marked the
          start of something incredible. Despite the challenges, including the risks of gathering ingredients, our
          commitment didn’t waver. <br />
          <br /> This kitchen became our community’s beacon of hope. Word spread rapidly, and the next day, even more
          neighbors arrived. Mahmoud sprang into action, venturing out to procure ingredients for a fresh meal. He
          returned with leafy greens, onions, and mushrooms, crafting a new dish that was as delightful as it was
          nourishing. The kitchen's capacity has now expanded to accommodate meals for up to 3000 people daily. For
          many, this was their first substantial meal in days, and the departure from canned food was a welcomed change
          that filled hearts with gratitude.
        </PlainText>

        <TextOverCard
          title="Our Expansion and Life-Saving Impact"
          description="From delivering water in Sheik Radwan to serving meals in Beach  Camp, our work has expanded across Gaza—yet every pot scraped clean  reminds us: no matter how much we give, the need grows deeper. Still, we persist. Because in the face of siege and starvation, solidarity is our only weapon. One truck, one meal, one classroom at a time, we prove  that even broken hands can build hope."
          onButtonClick={() => console.log('Clicked')}
          imageUrl="/IMG-20250609-WA0335.webp"
          textAlign="left"
        />
        <div className="w-[80%]">
          <UnderlinedHeading
            align="center"
            text=" You may wonder how we accomplished something that few have managed to do in the heart of
          starvation in Gaza:"
            size="text-4xl"
          ></UnderlinedHeading>
        </div>

        <ul className={` ${nunito.className} text-black list- w-[60%] mb-8 font-medium`}>
          <li>Bait Lahia has some farms where veggies and wild greens are now in season. </li>
          <li>We made sure they had the money to purchase these hard-to-find items.</li>
          <li>
            They are located in the heart of the market, so they can easily spot any of these veggies and cooking
            essentials arriving.
          </li>
          <li>They have visited farms close to the Green Line to find veggies and have been lucky a few times.</li>
          <li>Mom and my sisters lovingly wake up early to peel and prep the food for the day's meals.</li>
        </ul>

        <Image src="/Hani-Almadhoun.webp" alt="Picture of the author" width={500} height={500}></Image>

        <PlainText>
          <b>
            Your assistance can help us bring sustenance to an area with minimal aid, where children face the harsh
            reality of starvation.
          </b>
          <br></br>
          This personal initiative, coordinated with our family in North Gaza, ensures transparency. Your contribution,
          starting at five dollars, can provide a hot meal to desperate families enduring challenging conditions,
          intentionally isolated from the rest of the world. Your <span className="text-green-500 font-bold">
            $5
          </span>, <span className="text-green-500 font-bold">$10</span>,
          <span className="text-green-500 font-bold">$50</span> will go a long way with this initiative. We also need
          you to pray for their safety as they do this heroic work.
        </PlainText>
        <Button
          as="a"
          href={DONATION_URL}
          target="_blank"
          className="relative inline-block py-3 px-6 bg-[#2A8C61] text-white font-semibold text-base sm:text-lg no-underline rounded-lg overflow-hidden "
        >
          Support Our Efforts
          <div
            className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-donation-shine"
            style={{ transform: 'skewX(-20deg)' }}
          />
        </Button>

        <Carousel
          imagePaths={['/shati-team.webp', '/IMG-20250614-WA0151.webp', '/IMG-20250603-WA0040.webp']}
          altTexts={['st', 'an aj', 'chef-lulu']}
        />

        <InMemorySection
          title="Lion of The North"
          imageSrc="/chef_mahmoud.webp"
          description="In Memory..."
        ></InMemorySection>
      </section>
    </>
  );
}
