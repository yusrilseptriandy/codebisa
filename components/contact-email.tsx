// components/EmailButton.js
import Image from 'next/image';
import React from 'react';

const EmailButton = () => {
  const emailAddress = 'test@example.com';
  const subject = '';
  const body = '';

  return (
    <a
      href={`mailto:${emailAddress}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`}
      className="w-full h-14 "
    >
      <button className="w-full hover:bg-slate-100 justify-center shadow h-full bg-white items-center text-black px-3 py-2 flex gap-x-2 rounded-lg">
        <Image src={'../gmail.svg'} alt="email" width={34} height={34} />
        <p className="text-slate-700 font-semibold">Send Email</p>
      </button>
    </a>
  );
};

export default EmailButton;
