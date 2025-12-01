import React from 'react';
import Image from 'next/image';
import { livvic, Mistral} from '@/app/fonts/index';
import CheckCircle from './reusablecomponent/CheckCircle';
import { Beef } from 'lucide-react';
function OurIntro() {
  return (
    <section className="grid grid-cols-2 w-full h-140 ">
      <div className="relative h-[360px] flex ">
        <div className=" relative w-[420px] h-full ">
          <div className=" absolute inset-0 bg-[#D72638]"></div>
          <Image src="/meats.png" alt="meats" fill className="object-cover  " />
          <div className="absolute inset-0 bg-[#eb0b21b6]"></div>
          <div className="absolute mt-58 ml-36  top-[25%] w-5 h-39 bg-[#D72638] rounded-sm"></div>
          <div className="absolute ml-40 top-[25%] w-97 h-110 rounded-lg overflow-hidden">
            <Image
              src="/intro.jpg"
              alt="intro"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 365px"
            />
          </div>
          <div className='absolute flex justify-center items-center bg-[#D72638] rounded-2xl p-3 top-115 left-30 translate-x-22 '>
            <Beef  className='text-white w-14 h-14'/>
              <span className="block w-0.5 h-14 m-3  bg-[#ffffff70] rotate-180"></span>
              <div className='flex flex-col'>
              <strong className={`${Mistral.className} font-bold text-xl `}>86,700</strong>
              <p className={`text-xs ${livvic.className}`}>Savor the Taste of Pure Halal Meat</p>
              </div>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center max-w-lg ${livvic.className}`}
      >
        <h1 className="text-black text-[20px] pt-8">Our Introduction</h1>
        <h2 className="text-black text-[45px] font-bold pb-4">
          Pure Halal Meat and Fresh Quality
        </h2>
        <span className="text-[#D72638] text-[30px]">
          We’re Leader in Halal Meat Market
        </span>
        <p className="text-black text-[18px]">
          We provide fresh, high-quality halal meat sourced from trusted
          suppliers, ensuring every cut meets strict halal standards. Our
          commitment is to bring healthy and safe meat directly to your table.
        </p>
        <ul className="text-black text-[20px] py-4 ">
          <li className='flex items-center gap-2 pb-2'>
              <CheckCircle bg="#B6282D" iconColor="white" size={20} />
 Halal meat certified and responsibly sourced
          </li>
          <li className='flex items-center gap-2 pb-2'>
              <CheckCircle bg="#B6282D" iconColor="white" size={20} />
Fresh cuts delivered to meet your needs
          </li>
          <li className='flex items-center gap-2'>
            <CheckCircle bg="#B6282D" iconColor="white" size={20} /> Meat processed under strict hygiene standards
          </li>
        </ul>
      </div>
    </section>
  );
}

export default OurIntro;
