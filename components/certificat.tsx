'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Certificat = () => {
  return (
    <div className="flex flex-col bg-white gap-6 p-6 dark:bg-[#111111] border-[1.2px] border-slate-200 dark:border-[#333333] rounded-xl">
      <div className="flex gap-4">
        <div className="flex items-center">
          <Image
            src={'/dicoding.jpg'}
            alt="dicoding"
            width={80}
            height={80}
            className="rounded-md"
          />
        </div>
        <div>
          <h1 className="font-bold">Belajar Dasar Pemrograman JavaScript</h1>
          <p className="text-sm">Dicoding Indonesia</p>
          <Link
            href={
              'https://www.dicoding.com/certificates/6RPN444L5X2M?trk=public_profile_see-credential'
            }
            target="_blank"
          >
            <div className="flex items-center gap-2 text-sky-800">
              <p className="mt-3">See Certificate</p>
              <FaExternalLinkAlt />
            </div>
          </Link>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex items-center">
          <Image
            src={'/fcc.png'}
            alt="freecodecamp"
            width={80}
            height={80}
            className="rounded-md"
          />
        </div>
        <div>
          <h1 className="font-bold">
            Javascript Algorithms and Data Structures
          </h1>
          <p className="text-sm">FreeCodeCamp</p>
          <Link
            href={
              'https://www.freecodecamp.org/certification/YusrilSeptriandyNY/javascript-algorithms-and-data-structures?trk=public_profile_certification-title'
            }
            target="_blank"
          >
            <div className="flex items-center gap-2 text-sky-800">
              <p className="mt-3">See Certificate</p>
              <FaExternalLinkAlt />
            </div>
          </Link>
        </div>
      </div>

      <div className="flex gap-4 ">
        <div className="flex items-center">
          <Image
            src={
              'https://pbs.twimg.com/profile_images/1417157967124721666/xShJF4Km_400x400.png'
            }
            alt="udemy"
            width={80}
            height={80}
            className="rounded-md"
          />
        </div>
        <div>
          <h1 className="font-bold">
            HTML, CSS dan JavaScript : Pemula sampai Mahir
          </h1>
          <p className="text-sm">Udemy</p>
          <Link
            href={
              'https://www.udemy.com/certificate/UC-14876dc0-45ae-4614-a215-54c67cad85c7/'
            }
            target="_blank"
          >
            <div className="flex items-center gap-2 text-sky-800">
              <p className="mt-3">See Certificate</p>
              <FaExternalLinkAlt />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Certificat;
