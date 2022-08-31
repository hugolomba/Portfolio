import ProjectCard from "../components/ProjectCard";
import "../styles/components/projectsContainer.sass";

const ProjectsContainer = () => {
  return (
    <div>
      <h2>Projetos</h2>
      <section className="projects-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
      <div className="projects-container-btn">
        <button>Ver Todos</button>
      </div>
    </div>
  );
};

export default ProjectsContainer;
