import ProjectCard from "../components/ProjectCard";
import "../styles/components/projectsContainer.css";
import { Fade } from "react-awesome-reveal";

import {
  PrismicRichText,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";

const ProjectsContainer = () => {
  const [document, { state }] = useAllPrismicDocumentsByType("project", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  });

  console.log(document);

  return (
    <div>
      <h2>Projetos</h2>

      <section className="projects-container">
        {state === "loading" ? (
          <p>Loading...</p>
        ) : (
          document &&
          document.map((project) => {
            return <ProjectCard project={project} />;
          })
        )}
      </section>

      {/* <div className="projects-container-btn">
        <button>Ver Todos</button>
      </div> */}
    </div>
  );
};

export default ProjectsContainer;
