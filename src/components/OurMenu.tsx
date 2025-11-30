'use client';
import React from 'react';
import SideNavbar from './SideNavbar';
import OurmenuCard from './OurmenuCard';
import { Livvic, Poppins } from 'next/font/google';
import { ChevronLeft } from 'lucide-react';

const livvic = Livvic({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export type CategoryKey =
  | 'Beef'
  | 'Chicken'
  | 'Lamb'
  | 'Goat'
  | 'SpecialCutsAndOthers';


const menuItems: Record<CategoryKey, { img: string; title: string; price: string; link: string }[]> = {
  Chicken: [
    {
      img: '/chickenCard.jpg',
      title: 'Lamb Chops',
      price: '7.49',
      link: '/order/chicken',
    },
    {
      img: '/card2.jpg',
      title: 'Ground Lamb ',
      price: '6.59',
      link: '/order/chicken',
    },
 
  ],
  Beef: [
    {
      img: '/chickenCard.jpg',
      title: 'Beef Steak',
      price: '7.49',
      link: '/order/beef',
    },
    {
      img: '/card2.jpg',
      title: 'Ground Beef ',
      price: '6.59',
      link: '/order/beef',
    },
  ],
  Lamb: [
    {
      img: '/chickenCard.jpg',
      title: 'Lamb Steak',
      price: '7.49',
      link: '/order/lamp',
    },
   
  ],
  Goat: [
    {
      img: '/chickenCard.jpg',
      title: 'Goat Steak',
      price: '7.49',
      link: '/order/goat',
    },
    {
      img: '/card2.jpg',
      title: 'Ground Goat ',
      price: '6.59',
      link: '/order/goat',
    },
  ],
  SpecialCutsAndOthers: [
    {
      img: '/chickenCard.jpg',
      title: 'Special Cut Steak',
      price: '7.49',
      link: '/order/specialcutsandothers',
    },
    {
      img: '/card2.jpg',
      title: 'Ground Special Cuts ',
      price: '6.59',
      link: '/order/specialcutsandothers',
    },
  ],
};


function OurMenu() {
  const [activecategory, setActiveCategory] = React.useState<CategoryKey>('Beef');
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  const updateButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="pl-16 mt-10">
      <h2 className={`text-[#D72638] ${livvic.className} font-bold`}>
        OUR MENU
      </h2>
      <div className="flex justify-between items-start pr-10 w-full mb-">
        <p
          className={`text-black ${livvic.className} font-bold text-3xl w-220 mb-6`}
        >
          Explore Our Wide Range of Fresh, Premium Halal Meats – From Beef and
          Lamb to Chicken and <br />
          Goat.
        </p>
        <div className="flex flex-col items-end gap-3">
          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`w-9 h-9  rounded-full border border-none ${canScrollLeft ? 'bg-[#D72638] text-gray-300 cursor-pointer' :'bg-gray-300 cursor-not-allowed'} flex items-center justify-center  transition`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`w-9 h-9 rounded-full border border-none ${canScrollRight ? 'bg-[#D72638] text-gray-300 cursor-pointer' :'bg-gray-300 cursor-not-allowed'} flex items-center justify-center  transition`}
            >
              <ChevronLeft className="w-4 h-4 rotate-180" />
            </button>
          </div>
          <button
            className={`py-2 text-black flex items-center gap-2 font-semibold ${poppins.className} cursor-pointer`}
          >
            See All <ChevronLeft className="rotate-180 h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-20">
        <SideNavbar active={activecategory} setActive={setActiveCategory} />
        <div ref={scrollRef} onScroll={updateButtons} className="overflow-x-auto no-scrollbar">
          <div className="flex gap-8 flex-nowrap min-w-max ">
            {menuItems[activecategory].map((item) => (
              <OurmenuCard
                key={item.title}
                img={item.img}
                title={item.title}
                price={item.price}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMenu;
