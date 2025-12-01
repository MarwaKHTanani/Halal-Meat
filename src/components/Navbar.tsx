'use client';
import React from 'react';
import { sniglet } from '@/app/fonts/index';
import AccountMenu from './AccountMenu';
import { Bell, ShoppingCart } from 'lucide-react';
import SearchInput from './SearchInput';
import Link from 'next/link';

function Navbar() {
  const [activeSection, setActiveSection] = React.useState<string>('home');
  const [searchOpen, setSearchOpen] = React.useState<boolean>(false);
  return (
      <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-xs"
    >
    <div className=" max-w-[1200px] mx-auto flex justify-between items-center px-6 md:px-14 py-3  text-black ">
      <div className="flex items-center gap-6">
                  <Link href="/" className="flex items-baseline gap-1">

        <span
          className={`${sniglet.className} text-2xl  text-red-700 font-bold `}
        >
          HALAL
        </span>
        <span
          className={`${sniglet.className} text-2xl  text-black font-bold `}
        >
          {' '}
          MEAT
        </span>
        </Link>

        <ul className="hidden md:flex gap-8 pl-6  ">
          <li
            className={`cursor-pointer hover:text-red-700 transition-transform duration-300 hover:-translate-y-1 ${
              activeSection === 'home' ? 'text-red-700' : 'text-black'
            }`}
          >
              <Link className={`transition ${activeSection === 'home' ? 'text-red-700' : 'text-black'}`} href="#home">Home</Link>
          </li>
          <li
            className={`cursor-pointer hover:text-red-700 transition-transform duration-300 hover:-translate-y-1 ${
              activeSection === 'build-your-box' ? 'text-red-700' : 'text-black'
            }`}
          >
              <Link className={`transition ${activeSection === 'build-your-box' ? 'text-red-700' : 'text-black'}`} href="#build-your-box">Build your box</Link>
          </li>
          <li
            className={`cursor-pointer hover:text-red-700 transition-transform duration-300 hover:-translate-y-1 ${
              activeSection === 'about' ? 'text-red-700' : 'text-black'
            }`}
          >
            <Link className={`transition ${activeSection === 'about' ? 'text-red-700' : 'text-black'}`} href="#about">About</Link>
          </li>
          <li
            className={`cursor-pointer hover:text-red-700 transition-transform duration-300 hover:-translate-y-1 ${
              activeSection === 'shop' ? 'text-red-700' : 'text-black'
            }`}
          >
            <Link className={`transition ${activeSection === 'shop' ? 'text-red-700' : 'text-black'}`} href="#shop">Shop</Link>
          </li>
          <li
            className={`cursor-pointer hover:text-red-700 transition-transform duration-300 hover:-translate-y-1 ${
              activeSection === 'contact-us' ? 'text-red-700' : 'text-black'
            }`}
          >
            <Link className={`transition ${activeSection === 'contact-us' ? 'text-red-700' : 'text-black'}`} href="#contact-us">Contact us</Link>
          </li>
        </ul>
      </div>
      <div
        className={`flex items-center gap-4 transition-transform duration-300 `}
      >
        <div
          className={`flex gap-2 ${
            searchOpen ? '-translate-x-54' : 'translate-x-0'
          }`}
        >
          <Bell className="cursor-pointer bell-ring transition-transform duration-300 hover:-translate-y-1" />
          <ShoppingCart className="cursor-pointer transition-transform duration-300 hover:-translate-y-1 " />
        </div>
        <SearchInput open={searchOpen} setOpen={setSearchOpen} />
        <AccountMenu />
      </div>
    </div>
    </nav>
  );
}

export default Navbar;
