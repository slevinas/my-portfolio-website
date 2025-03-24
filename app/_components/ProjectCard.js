import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      {image && (
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-400 mb-4">{description}</p>
        {link && (
          <Link
            href={link}
            target="_blank"
            className="inline-block bg-accent-500 text-primary-800 px-4 py-2 rounded hover:bg-accent-600 transition"
          >
            View Project
          </Link>
        )}
      </div>
    </div>
  );
}
