'use client';
import { ChevronDown, UserRound } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import useClickOutside from '@/app/hooks/useClickOutside';

function AccountMenu() {
  const [open, setOpen] = React.useState<boolean>(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

    useClickOutside(menuRef, () => setOpen(false));
  return (
    <div className="relative" ref={menuRef}>
      <div
        className="flex p-2 gap-1 bg-white rounded-lg items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <UserRound className="bg-[#FF606080] rounded-2xl p-1" />
        <span className="text-sm capitalize">account</span>
        <ChevronDown className={`w-3 transition ${open ? 'rotate-180' : ''}`} />
      </div>
      {open && (
        <div className="absolute text-center right-0 mt-3 w-28 bg-white rounded-lg p-1">
          <Link
            href="/account"
            className=" block px-3  py-2 hover:bg-gray-100 border-b border-b-[#E5E5E5] "
          >
            Account
          </Link>
          <Link
            href="/order"
            className=" block px-3  py-2 hover:bg-gray-100 border-b border-b-[#E5E5E5]  "
          >
            Orders
          </Link>
          <Link
            href="/payment"
            className=" block px-3  py-2 hover:bg-gray-100 border-b border-b-[#E5E5E5]  "
          >
            Payment
          </Link>
          <Link
            href="/cart"
            className=" block px-3  py-2 hover:bg-gray-100 border-b border-b-[#E5E5E5]  "
          >
            Cart
          </Link>
          <button className=" block w-full px-3 py-2 hover:bg-gray-100 cursor-pointer">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default AccountMenu;
