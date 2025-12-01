import Image from 'next/image';
import React from 'react'
import { poppins } from '@/app/fonts';

interface ServicesCardProps {
    icon:string;
    title:string;
    description:string;
    background?:string;
    textColor?:string;
    descColor?:string;
}

function ServicesCard({icon,title,description,background,textColor,descColor}:ServicesCardProps) {
  return (
    <div className={`flex flex-col gap-3 items-center text-center border px-4 py-6 h-50 w-60 border-gray-200 ${poppins.className}`} style={{background}}>
        <div className='w-6 h-6'><Image src={icon} alt={title} width={38} height={38} /></div>
        <h3 className='font-bold' style={{color: textColor}}>{title}</h3>
        <p className=' text-xs' style={{color: descColor}}>{description}</p>
    </div>
  )
}

export default ServicesCard