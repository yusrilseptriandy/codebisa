import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ContactLinkedin = () => {
  return (
    <div className="w-full flex justify-between bg-gradient-to-r from-sky-800 border-sky-700 border rounded-lg to-sky-700">
      <div className="w-[23.5rem] bg-gradient-to-r from-sky-900 to-sky-800 flex items-center justify-center rounded-l-lg h-full">
        <Image src={'../linkedin.svg'} alt="github" width={50} height={50} />
      </div>
      <div className="flex gap-x-3  gap-y-3 p-6 flex-col">
        <div>
          <p className="text-slate-300">
            Mari terhubung di LinkedIn untuk peluang kerja dan diskusi
            profesional
          </p>
        </div>
        <Link
          href={'https://www.linkedin.com/in/yusril-septriandy-ny'}
          target="_blank"
        >
          <button className="w-max shadow bg-sky-600 text-white px-3 py-2 flex gap-x-2 rounded-lg ">
            LinkedIn
            <FaExternalLinkAlt />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactLinkedin;
