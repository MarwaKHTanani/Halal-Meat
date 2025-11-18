import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function HomeSection() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/home.gif')" }}
    >
      <div className="absolute inset-0 bg-[#D7263840]"></div>

      <div className="relative h-screen flex  justify-between">
        <div className=" flex flex-col justify-center   pl-16 ">
          <h1 className="text-4xl pb-8">
            Halal Meat
            <div className="pt-1">
              <span className="block w-42 h-px bg-red-600 -rotate-4"></span>
              <span className="block w-44 h-px bg-red-600 rotate-3deg"></span>
              <span className="block w-46 h-px bg-red-600 rotate-2"></span>
              <span className="block w-48 h-px bg-red-600 -rotate-2"></span>
            </div>
          </h1>
          <div className="relative inline-block">
            <span className="text-6xl font-bold">Eat Cleaner</span>
            <Image
              src="/tree.png"
              alt="Eat Cleaner"
              width={52}
              height={42}
              className="absolute -top-5 left-76"
            />
          </div>
          <span className="text-5xl pb-4">With Halal Meat</span>
          <p className="w-124 pb-4">
            Discover premium, hand-slaughtered Halal meats delivered fresh to
            your doorstep — ethically sourced, USDA certified, and prepared with
            care to bring authentic taste and peace of mind to every meal.
          </p>
          <button className="text-left bg-[#D72638] w-38 px-6 py-3 rounded-lg text-[12px] font-bold transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
            BUILD YOUR BOX
          </button>
        </div>

        <div className="flex flex-col justify-center gap-16">
          <Link href={''} className="rotate-90 origin-bottom-left">
            Instegram
          </Link>
          <Link href={''} className="rotate-90 origin-bottom-left">
            Facebook
          </Link>
          <Link href={''} className="rotate-90 origin-bottom-left">
            Linkedin
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
