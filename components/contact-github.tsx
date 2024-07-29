import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ContactGithub = () => {
  return (
    <div className="w-full flex bg-gradient-to-r from-[#0e1528] border-blue-950 border rounded-lg to-blue-950">
      <div className="w-64 bg-gradient-to-r from-blue-950 to-sky-950 flex items-center justify-center rounded-l-lg h-full">
        <Image src={'../github.svg'} alt="github" width={50} height={50} />
      </div>
      <div className="flex gap-x-3  gap-y-3 p-6 flex-col">
        <div>
          <p className="text-slate-400">
            Ayo temui saya dan jelajahi kode saya di GitHub!
          </p>
        </div>
        <Link href={'https://github.com/yusrilseptriandy'} target="_blank">
          <button className="w-max shadow bg-blue-950 text-white px-3 py-2 flex gap-x-2 rounded-lg ">
            Github
            <FaExternalLinkAlt />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactGithub;
