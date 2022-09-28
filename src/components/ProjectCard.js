import "../styles/components/projectCard.css";
import { FaGithub, FaLaptop } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <Fade cascade="true">
      <div key={project.id} className="project-card grow">
        <img src={project.data.thumbnail.url} alt="aplication" />
        <div className="project-card-info">
          <h3>{project.data.title[0].text}</h3>
          <p>{project.data.card_description[0].text}</p>
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
