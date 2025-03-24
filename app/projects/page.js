import ProjectCard from "../_components/ProjectCard";
import projects from "../_data/projects";

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </main>
  );
}
