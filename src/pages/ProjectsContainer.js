import ProjectCard from "../components/ProjectCard";
import "../styles/components/projectsContainer.css";
import { Fade } from "react-awesome-reveal";

import {
  PrismicRichText,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";

const ProjectsContainer = () => {
  const [document] = useAllPrismicDocumentsByType("project");
  console.log(document);

  return (
    <div>
      <h2>Projetos</h2>

      <section className="projects-container">
        {document && <ProjectCard project={document[0]} />}
      </section>

      {/* <div className="projects-container-btn">
        <button>Ver Todos</button>
      </div> */}
    </div>
  );
};

export default ProjectsContainer;
