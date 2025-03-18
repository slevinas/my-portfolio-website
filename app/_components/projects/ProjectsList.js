import projects from '../../../zigi_supportives/projects.json';
import ProjectCard from './ProjectCard';

function ProjectsList() {
  // const projects = await getProjects();
  console.log(projects);
  return (
    <div>
      {/* <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        My Latest Projects
      </h1> */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
    </div>
  );
}

export default ProjectsList;