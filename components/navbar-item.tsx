'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarItemProps {
  name: string;
  path: string;
  onClick?: () => void;
}

const NavbarItem = ({ name, path, onClick }: NavbarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <div
      onClick={onClick}
      className="flex md:flex-col h-full md:items-center md:justify-center gap-x-3 md:gap-x-0"
    >
      <div
        className={`${
          isActive ? 'w-1 h-full md:hidden bg-sky-600 rounded-r-full' : ''
        }`}
      />
      <Link
        href={path}
        className={`text-[#888888] transition-all text-lg md:text-base hover:text-sky-500 ${
          isActive ? 'text-sky-500' : ''
        }`}
      >
        {name}
      </Link>
      <div
        className={`${
          isActive
            ? 'w-10 top-[59px] h-1 absolute hidden md:block bg-sky-600 rounded-t-full transition-all'
            : ''
        }`}
      />
    </div>
  );
};

export default NavbarItem;
