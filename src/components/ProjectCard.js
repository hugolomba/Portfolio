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
        <div className="project-tecnologies">
          <DiHtml5 id="html" />
          <DiCss3 id="css" />
          <DiJsBadge id="js" />
        </div>
        <p>Description: Um jogo desenvolvido usando canvas</p>
      </div>

      <button>Ver Detalhes</button>
    </div>
  );
};

export default ProjectCard;
