import Contact from '@/components/contact';
import EmailButton from '@/components/contact-email';


import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yusrilsptr | Contact',
};

const ContactPage = () => {
  return (
    <div className="flex flex-col w-full gap-y-3 h-full md:px-60">
      <h1 className="text-3xl font-bold">Find me on</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        <Contact />
      </div>
      <EmailButton />
    </div>
  );
};

export default ContactPage;
