// app/projects/page.tsx
import Image from "next/image";
import Link from "next/link";
import projects from "../_data/projects";

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="inline-block bg-accent-500 text-primary-800 px-4 py-2 rounded hover:bg-accent-600 transition"
                >
                  View Project
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
