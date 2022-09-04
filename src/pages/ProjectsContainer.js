import ProjectCard from "../components/ProjectCard";
import "../styles/components/projectsContainer.css";
import { Fade } from "react-awesome-reveal";

const ProjectsContainer = () => {
  return (
    <div>
      <h2>Projetos</h2>

      <section className="projects-container">
        <Fade cascade="true">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Fade>
      </section>

      {/* <div className="projects-container-btn">
        <button>Ver Todos</button>
      </div> */}
    </div>
  );
};

export default ProjectsContainer;
