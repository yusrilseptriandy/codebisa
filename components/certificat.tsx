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
            src={
              'https://scontent-cgk2-1.xx.fbcdn.net/v/t39.30808-6/356379626_631128189145406_1015332997625790136_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jOn5FsolAccQ7kNvgHJOvBT&_nc_ht=scontent-cgk2-1.xx&oh=00_AYBManXIwLz6hJ6NfySyfZatDxg1bNPg5uPAmU-6dcikgQ&oe=66AC4E90'
            }
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
            src={
              'https://scontent-cgk2-1.xx.fbcdn.net/v/t39.30808-6/250929173_3179576238942422_6492034145953428513_n.png?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=wQCCujgddVgQ7kNvgGpA69n&_nc_ht=scontent-cgk2-1.xx&oh=00_AYBqTHxRn2WDi15OVFFqANt1sRLpfXiPulmDdgQWHIMm-g&oe=66AC5999'
            }
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
