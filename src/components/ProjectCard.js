import projectOne from "../img/demo-img.png";
import projectTwo from "../img/portfolio.png";
import projectComing from "../img/coding-gif.gif";
import "../styles/components/projectCard.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLaptop } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const projectsArr = [
  {
    name: "Abduction Game",
    img: projectOne,
    description: "Um jogo feito com JavaScript, HTML e CSS.",
    githubLink: "https://github.com/hugolomba/Abduction-Game",
    liveLink: "https://abduction.hugomiranda.me/",
  },

  {
    name: "Portfólio Pessoal",
    img: projectTwo,
    description: "Site pessoal e Portfólio de projetos. Desenvolido com React.",
    githubLink: "https://github.com/hugolomba/portfolio",
    liveLink: "http://hugomiranda.me",
  },

  {
    name: "Em Produção",
    img: projectComing,
    description: "Projeto em construção. Em breve aparecerá aqui.",
    githubLink: "",
    liveLink: "",
  },
];

const ProjectCard = () => {
  return (
    <Fade cascade="true">
      {projectsArr.map((project) => {
        return (
          <div key={project.name} className="project-card grow">
            <img src={project.img} alt="aplication" />
            <div className="project-card-info">
              <h3>{project.name}</h3> <p>{project.description}</p>
              <div className="project-tecnologies">
                <a href={project.githubLink} target="_blank">
                  <FaGithub id="github" />
                </a>
                <a href={project.liveLink} target="_blank">
                  <FaLaptop id="laptop" />
                </a>
              </div>
            </div>

            {/* <button>Ver Detalhes</button> */}
          </div>
        );
      })}
    </Fade>
  );
};

export default ProjectCard;
