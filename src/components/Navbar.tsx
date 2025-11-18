'use client';
import React from 'react';
import { Sniglet } from 'next/font/google';
import AccountMenu from './AccountMenu';
import { Search, Bell, ShoppingCart } from 'lucide-react';
import SearchInput from './SearchInput';

const sniglet = Sniglet({
  weight: '800',
  subsets: ['latin'],
});
function Navbar() {
  const [activeSection, setActiveSection] = React.useState<string>('home');
  const [searchOpen, setSearchOpen] = React.useState<boolean>(false);
  return (
    <div className="flex justify-between items-center px-14 py-3  text-black bg-[#FFFFFF57]">
      <div className="flex items-center">
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

        <ul className="flex gap-16 pl-10  ">
          <li
            className={`cursor-pointer hover:text-red-700 transition-transform duration-300 hover:-translate-y-1 ${
              activeSection === 'home' ? 'text-red-700' : 'text-black'
            }`}
          >
            <a href="home">Home</a>
          </li>
          <li
            className={`cursor-pointer hover:text-red-700 transition-transform duration-300 hover:-translate-y-1 ${
              activeSection === 'build-your-box' ? 'text-red-700' : 'text-black'
            }`}
          >
            <a href="build-your-box">Build your box</a>
          </li>
          <li
            className={`cursor-pointer hover:text-red-700 transition-transform duration-300 hover:-translate-y-1 ${
              activeSection === 'about' ? 'text-red-700' : 'text-black'
            }`}
          >
            <a href="about">About</a>
          </li>
          <li
            className={`cursor-pointer hover:text-red-700 transition-transform duration-300 hover:-translate-y-1 ${
              activeSection === 'shop' ? 'text-red-700' : 'text-black'
            }`}
          >
            <a href="shop">Shop</a>
          </li>
          <li
            className={`cursor-pointer hover:text-red-700 transition-transform duration-300 hover:-translate-y-1 ${
              activeSection === 'contact-us' ? 'text-red-700' : 'text-black'
            }`}
          >
            <a href="contact-us">Contact us</a>
          </li>
        </ul>
      </div>
      <div
        className={`flex items-center gap-4 transition-transform duration-300 `}
      >
        <div
          className={`flex gap-2 ${
            searchOpen ? '-translate-x-58' : 'translate-x-0'
          }`}
        >
          <Bell className="cursor-pointer bell-ring transition-transform duration-300 hover:-translate-y-1" />
          <ShoppingCart className="cursor-pointer transition-transform duration-300 hover:-translate-y-1 " />
        </div>
        <SearchInput open={searchOpen} setOpen={setSearchOpen} />
        <AccountMenu />
      </div>
    </div>
  );
}

export default Navbar;
