import projectOne from "../img/demo-img.png";
import "../styles/components/projectCard.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLaptop } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className="project-card grow">
      <img src={projectOne} alt="animation of gameplay" />
      <div className="project-card-info">
        <h3>Abduction Game</h3>{" "}
        <p>
          Um jogo feito com JavaScript, HTML e CSS. O jogador controla uma nave
          que precisa desviar dos obstáculos e abduzir os seres do planeta para
          acumular pontos.
        </p>
        <div className="project-tecnologies">
          <a href="https://github.com/hugolomba/Abduction-Game" target="_blank">
            <FaGithub id="github" />
          </a>
          <a href="http://hugomiranda.me/Abduction-Game/" target="_blank">
            <FaLaptop id="laptop" />
          </a>
        </div>
      </div>

      {/* <button>Ver Detalhes</button> */}
    </div>
  );
};

export default ProjectCard;
