'use client';

import Image from 'next/image';
import { IoInformationCircle } from 'react-icons/io5';

const Skill = () => {
  return (
    <div className="flex flex-col bg-white gap-3 p-6 dark:bg-[#111111] border-[1.2px] border-slate-200 items-center justify-center dark:border-[#333333] rounded-xl">
      <div className="flex gap-4 items-center justify-center flex-wrap">
        <Image src={'../js.svg'} width={50} height={50} alt="javascript" />
        <Image src={'../ts.svg'} width={50} height={50} alt="typescript" />
        <div className="flex flex-col items-center justify-center">
          <div className="w-max flex text-white gap-1 rounded mt-3 h-max p-1 bg-sky-500">
            <IoInformationCircle />
            <p className="text-xs">Basic</p>
          </div>
          <Image src={'../java.svg'} width={50} height={50} alt="java" />
        </div>
        <Image
          src={'../nodejs.svg'}
          width={50}
          height={50}
          alt="nodejs"
          className="bg-white h-max rounded-md p-1"
        />
        <Image src={'../react.svg'} width={50} height={50} alt="reactjs" />
        <Image
          src={'../nextjs.svg'}
          width={50}
          height={50}
          alt="nexttjs"
          className="bg-white h-max rounded-md p-1"
        />
        <Image src={'../tailwind.svg'} width={50} height={50} alt="tailwind" />
        <Image src={'../mysql.svg'} width={50} height={50} alt="mysql" />
        <Image src={'../mongodb.svg'} width={50} height={50} alt="mongodb" />
      </div>
    </div>
  );
};

export default Skill;
