import Image from 'next/image';
import React from 'react';
import { Poppins } from 'next/font/google';


const poppins = Poppins({  
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
});

function SidenavItem({
  img,
  title,
  active,
  onClick,
}: {
  img: string;
  title: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`${active ? 'text-white bg-[#D72638] rounded-4xl' : 'text-black'
      } px-4 py-3 w-fit flex items-center  gap-2 mb-2 text-lg ${poppins.className}`}
    >
      <Image src={img} alt={title} width={24} height={24} className="w-9 h-9  bg-white  rounded-3xl p-1 " />

      {title}
    </button>
  );
}

export default SidenavItem;
