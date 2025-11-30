'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Poppins } from 'next/font/google';
import { ChevronRight } from 'lucide-react';


const poppins = Poppins({  
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
});

interface OurMenuCardProps {
  img: string;
  title: string;
  price: string;
  link: string;
}

function OurmenuCard({ img, title, price, link }: OurMenuCardProps) {
  return (
    <div className={`relative w-74 h-85 rounded-lg overflow-hidden shadow-lg bg-white  ${poppins.className}`}>
      <Image
        src={img}
        alt={title}
        fill
        style={{ objectFit: 'cover' }}
        className="absolute top-0 left-0 z-0"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10" />

      <div className="absolute bottom-16 left-4 z-20 text-white">
        <h3 className="text-xl pb-3">{title}</h3>
        <span className="text-xl font-bold"> <span className='text-[#D72638] text-sm pr-1'>$</span>{price}</span>
      </div>

      <div className="absolute bottom-4 left-4 z-20">
        <Link
          href={link}
          className=" text-white rounded-lg text-sm transition"
        >
          Order Now <ChevronRight className="inline-block w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}

export default OurmenuCard;
