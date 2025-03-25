import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg bg-white dark:bg-zinc-800 dark:text-white transition">
      {image && (
        <div className="h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-primary-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

        {link && (
          <Link
            href={link}
            target="_blank"
            className="inline-block bg-accent-500 text-primary-800 px-4 py-2 rounded hover:bg-accent-600 dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:text-zinc-900 transition"
          >
            View Project
          </Link>
        )}
      </div>
    </div>
  );
}
