import {
  Fraunces,
  Jua,
  Marcellus,
  Noto_Serif,
  Philosopher,
  Sanchez,
  Tac_One,
} from 'next/font/google';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

const font = Fraunces({ subsets: ['latin'], weight: '400' });
const font2 = Tac_One({ subsets: ['latin'], weight: '400' });
const Logo = () => {
  return (
    <Link href={'/'} className={`${font.className} text-2xl flex items-center`}>
      <h1 className="font-semibold text-md">Codebisa</h1>
    </Link>
  );
};

export default Logo;
