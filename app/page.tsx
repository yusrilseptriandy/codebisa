import Certificat from '@/components/certificat';
import Skill from '@/components/skill';
import TypeWriterAnimation from '@/components/type-writer';

export default function Home() {
  return (
    <div className="flex w-full h-full md:px-60">
      <div className="flex flex-col gap-6">
        <div className="text-xl flex gap-2 md:text-3xl mt-6 font-bold">
          <h1> Hello, i&apos;m</h1>
          <TypeWriterAnimation />
        </div>
        <p className="text-justify">
          I am a passionate and dedicated Computer Science Student specializing
          in Full-Stack Web Development with a focus on JavaScript technologies
          and do not rule out the possibility of honing in on other
          technologies. Want to utilize technical skills in creating dynamic and
          user-friendly web applications. Actively seek opportunities to
          contribute to innovative projects and expand knowledge in the
          ever-evolving technology industry.
        </p>

        <h1 className="text-3xl font-bold">Skill</h1>
        <Skill />

        <h1 className="text-3xl font-bold">Certificate</h1>
        <Certificat />
      </div>
    </div>
  );
}
