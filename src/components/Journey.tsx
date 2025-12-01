import { poppins,ruthie } from '@/app/fonts';
import Image from 'next/image';
import React from 'react';

function Journey() {
  return (
    <section className="mt-10 ">
      <div
        className={`flex justify-between bg-[#D72638] text-white py-4 px-24 ${poppins.className} `}
      >
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">8</span>
          <span className="text-xs">Years of Service</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">459</span>
          <span className="text-xs">Sq. Meter Area</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">50</span>
          <span className="text-xs">Nice Meat</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold ">3786</span>
          <span className="text-xs">Happy Visitors</span>
        </div>
      </div>
      <div className="relative  h-50 w-full">
        <Image
          src="/kofta.jpg"
          fill
          alt="kofta"
          style={{ objectFit: 'cover' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)',
          }}
        ></div>
        <h1
          className="absolute inset-0 flex items-center justify-center text-5xl md:text-6xl font-bold text-white/80 tracking-widest"
          style={{ letterSpacing: '2em' }}
        >
          HALAL
        </h1>
        <div className={`absolute bottom-[-22] left-29  px-4 py-2 rounded-md ${ruthie.className}`}>
          <span className="text-white text-4xl  " style={{ letterSpacing: "0.9em" }}>FeelFood</span>
          </div>
      </div>
      <div className="flex w-full gap-0">
        <div className="flex flex-col gap-0 w-1/4">
          <div className="flex flex-col gap-4 items-center justify-center h-70 bg-[#412229]">
              <Image
              src="/Vector2.svg"
              alt="decorative line"
              width={210}
              height={70}
              className="absolute mb-2"
            />
            <span className="text-white font-bold text-4xl">Fresh,</span>
            <span className="text-[#FF929D] font-bold text-4xl">Halal,</span>
            <span className="text-white font-bold text-4xl">Delicious</span>
          </div>
          <div className="relative h-120">
            <Image
              src="/chickenS.jpg"
              alt="chickenS"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-0 w-1/4">
          <div className="relative h-70">
            <Image
              src="/burger.jpg"
              alt="burger"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center h-50 bg-[#412229]">
            <span className="text-gray-200 text-4xl">Discount</span>
            <span className="text-white font-bold text-5xl">50%</span>
            <span className="text-gray-200  text-4xl">Weekend</span>
          </div>
          <div className="relative h-70 w-100">
            <Image
              src="/meatS.jpg"
              alt="meatS"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className={`flex flex-col gap-0 w-1/4 ${poppins.className}`}>
          <div className="h-70  flex items-center justify-center bg-[#B30310]">
            <div className="relative mb-4">
              <div className="border-2 top-[-170] left-[-28] border-white h-80 w-84 absolute "></div>

              <div className="border top-[-90] left-[-5] border-white h-55 w-65 absolute "></div>
              <div className="border top-[-110] left-[12] border-white h-55 w-65 absolute "></div>
            </div>
            <p className="text-3xl w-70 px-8 text-center">{`"Good days begin with faith, love, and a plate of halal meat."`}</p>
          </div>
          <div className="h-50 flex items-center justify-center  bg-[#B30310]">
            <p className="text-sm tracking-widest text-center">
              Food for us comes from our relatives, whether they have wings or
              fins or roots. That is how we consider food. Food has a culture.
              It has a history. It has a story. It has relationships.
            </p>
          </div>
          <div className="relative h-70 w-71 ml-14">
            <Image
              src="/meat2.jpg"
              alt="meat2"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-0 w-1/4">
          <div className="relative h-120">
            <Image
              src="/ch1.jpg"
              alt="chef"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="relative h-6  bg-[#B30310]"></div>

          <div className="relative h-64">
            <Image
              src="/ch2.jpg"
              alt="chef"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
