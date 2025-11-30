'use client';
import React from 'react';
import SidenavItem from './SidenavItem';
import { CategoryKey } from './OurMenu';
const categories: { title: CategoryKey; img: string }[] = [
  { title: 'Beef', img: '/beef.png' },
  { title: 'Chicken', img: '/chicken.png' },
  { title: 'Lamb', img: '/lamp.png' },
  { title: 'Goat', img: '/goat.png' },
  { title: 'SpecialCutsAndOthers', img: '/scother.png' },

  
]
function SideNavbar({active, setActive}: {active: CategoryKey; setActive: (category: CategoryKey) => void;}) {
  return (
<aside className="w-76 h-85 p-2 border-r border-gray-300 overflow-y-auto shrink-0 custom-vertical-scroll">
      <nav  className="flex flex-col">
        {categories.map((category) => (   
          <SidenavItem
            key={category.title}
            img={category.img}  
            title={category.title}
            active={active === category.title}
            onClick={() => setActive(category.title)}
          />
        ))}
      </nav>
    </aside>
  );
}

export default SideNavbar;
