import projectOne from "../img/demo-img.png";
import projectTwo from "../img/portfolio.png";
import projectThree from "../img/todolist.png";
import projectFour from "../img/solar-system.png";
import projectComing from "../img/coding-gif.gif";
import "../styles/components/projectCard.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLaptop } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const projectsArr = [
  {
    name: "The Solar System",
    img: projectFour,
    description:
      "Uma aplicação mostrando informações e curiosidades sobre os planetas do sistema solar",
    githubLink: "https://github.com/hugolomba/the-solar-system",
    liveLink: "https://thesolarsystem.hugomiranda.me/",
  },

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
    name: "To Do List",
    img: projectThree,
    description: "Um aplicação com de lista de tarefas",
    githubLink: "https://github.com/hugolomba/to-do-list",
    liveLink: "https://todolisthugo.netlify.app/",
  },

  {
    name: "Em Produção",
    img: projectComing,
    description: "Projeto em construção. Em breve aparecerá aqui.",
    githubLink: "",
    liveLink: "",
  },
];

const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <Fade cascade="true">
      <div key={project.id} className="project-card grow">
        <img src={project.data.image.url} alt="aplication" />
        <div className="project-card-info">
          <h3>{project.data.title.text}</h3>{" "}
          <p>{project.data.description[1].text}</p>
          <div className="project-tecnologies">
            <a href={project.data.github_link.url} target="_blank">
              <FaGithub id="github" />
            </a>
            <a href={project.data.live_link.url} target="_blank">
              <FaLaptop id="laptop" />
            </a>
          </div>
        </div>

        {/* <button>Ver Detalhes</button> */}
      </div>
    </Fade>
  );
};

export default ProjectCard;
