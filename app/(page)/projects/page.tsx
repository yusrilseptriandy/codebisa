import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yusrilsptr | Projects',
};

const ProjectsPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src={'/cs.jpg'}
        alt="coming soon"
        width={800}
        height={500}
        className=""
      />
    </div>
  );
};

export default ProjectsPage;
