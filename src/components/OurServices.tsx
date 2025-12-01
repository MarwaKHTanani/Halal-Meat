import React from 'react';
import ServicesCard from './reusablecomponent/ServicesCard';
import { livvic } from '@/app/fonts';
function OurServices() {
  return (
    <div className=" flex flex-col items-center">
    <div className="flex items-center mt-6 w-full justify-center">
  <span className=" h-0.5 w-6 bg-[#D72638] rounded-3xl"></span>
  <h1 className={`text-[#D72638] font-bold text-lg mx-3 ${livvic.className}`}>Our Services</h1>
  <span className=" h-0.5 w-6 bg-[#D72638] rounded-3xl"></span>
</div>


      <div className={`text-3xl font-bold ${livvic.className} flex gap-2 mt-4`}>
        <span className=" text-black">Explore Our </span>
        <span className="text-[#D72638] ">Services</span>
      </div>
      <div className="grid grid-cols-3 gap-16 mt-6">
        <ServicesCard
          background="#ffffff"
          textColor="#000000"
          descColor="gray"
          icon="/1.png"
          title="Fresh Meat Selection"
          description="Hand-picked halal beef, lamb, and chicken cuts with premium quality."
        />
        <ServicesCard
          background="#D72638"
          textColor="#FFFFFF"
          icon="/2.png"
          title="Build Your Box"
          description="Customize your own halal meat box with your favorite choices."
        />
        <ServicesCard
          background="#ffffff"
          textColor="#000000"
          descColor="gray"
          icon="/3.png"
          title="Chilled Delivery"
          description="Safe and fast delivery with temperature-controlled packaging."
        />
        <ServicesCard
          background="#ffffff"
          textColor="#000000"
          descColor="gray"
          icon="/4.png"
          title="Monthly Subscription"
          description="Get your halal meat box delivered weekly or monthly with ease."
        />
        <ServicesCard
          background="#ffffff"
          textColor="#000000"
          descColor="gray"
          icon="/5.png"
          title="Cooking Recipes"
          description="Delicious recipes and cooking tips to match your meat selection."
        />
        <ServicesCard
          background="#ffffff"
          textColor="#000000"
          descColor="gray"
          icon="/6.png"
          title="Family & Party Packs"
          description="Special halal boxes designed for families, gatherings, and events."
        />
      </div>
    </div>
  );
}

export default OurServices;
