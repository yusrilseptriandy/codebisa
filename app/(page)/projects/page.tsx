import Image from 'next/image';
import { Metadata } from 'next';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Yusrilsptr | Projects',
};

const ProjectsPage = () => {
  return (
    <div className="w-full gap-4 h-full flex items-center justify-center">
      <Card>
        <Image
          src={'/rentalcar.png'}
          width={300}
          height={100}
          alt="image"
          className="rounded-t-xl mb-4 w-full"
        />
        <CardFooter>
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl">Sistem Rental Mobil</h2>
            <h3 className="font-semibold ">Tech Stack : </h3>
            <p className="text-sm text-wrap">
              Laravel, Jetstream, MySQL, Yajra Datatable, Tailwind
            </p>

            <Link
              href="https://github.com/yusrilseptriandy/flexcar-car-rental.git"
              className="text-blue-500 bg-slate-800 max-w-max p-2 mt-4 font-bold rounded-md "
              target="_blank"
            >
              Github
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectsPage;
