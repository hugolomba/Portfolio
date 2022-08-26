import ProjectCard from "./ProjectCard";
import "../styles/components/projectsContainer.sass";

const ProjectsContainer = () => {
  return (
    <div>
      <h2>Projetos</h2>
      <section className="projects-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        {/* <ProjectCard /> */}
      </section>
      <button>Todos os Projetos</button>
    </div>
  );
};

export default ProjectsContainer;
