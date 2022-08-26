import projectOne from "../img/demo-img.png";
import "../styles/components/projectCard.sass";

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <img src={projectOne} alt="animation of gameplay" />
      <div className="project-card-info">
        <h3>Project_Name</h3>
        <h5>Type: TYPE_OF_PROJECT</h5>
        <div className="project-tecnologies">
          <DiHtml5 />
          <DiCss3 />
          <DiJsBadge />
        </div>
      </div>

      <button>Ver Detalhes</button>
    </div>
  );
};

export default ProjectCard;
