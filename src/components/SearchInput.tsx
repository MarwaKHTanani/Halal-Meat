import React from 'react';
import { Search } from 'lucide-react';
import useClickOutside from '@/app/hooks/useClickOutside';

interface SearchInputProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchInput({ open, setOpen }: SearchInputProps) {
  const wrapperRef  = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  useClickOutside(wrapperRef, () => setOpen(false));

   React.useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <div ref={wrapperRef } className='relative flex items-center'>
      <Search
        className={`cursor-pointer transition-transform duration-300 ${open?'translate-x-20':'translate-x-0'}`}
        onClick={() => setOpen((prev) => !prev)}
      />
      
        <input
          type="text"
          ref={inputRef}
          placeholder="Search .."
          className={`absolute right-0 -top-1 border border-gray-600 rounded-md p-1 transition-all duration-300 ${
            open?'w-60 translate-x-0':'w-0 translate-x-10 opacity-0'
          }`}
        />
      
    </div>
  );
}

export default SearchInput;
