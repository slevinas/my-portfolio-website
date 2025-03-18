import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({ project }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = project;

  return (
    <div className="flex border-primary-800 border">
      <div className="flex-1 relative">
        <Image
          src={image}
          fill
          alt={`Project ${name}`}
          className="object-cover border-r border-primary-800"
        />
      </div>



        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            See Details  &rarr;
          </Link>
        </div>
      </div>
   
  );
}

export default ProjectCard;
