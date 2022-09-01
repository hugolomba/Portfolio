import projectOne from "../img/demo-img.png";
import "../styles/components/projectCard.sass";

import { FaGithub, FaLaptop } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className="project-card grow">
      <img src={projectOne} alt="animation of gameplay" />
      <div className="project-card-info">
        <h3>Project_Name</h3>{" "}
        <p>
          Description: Um jogo desenvolvido usando canvaskbskjdbjksbdkjsbdsd
        </p>
        <div className="project-tecnologies">
          <FaGithub id="github" />
          <FaLaptop id="laptop" />
        </div>
      </div>

      {/* <button>Ver Detalhes</button> */}
    </div>
  );
};

export default ProjectCard;
