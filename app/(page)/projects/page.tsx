import Image from 'next/image';

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
