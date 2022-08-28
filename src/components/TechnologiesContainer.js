import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiGit,
  DiSass,
} from "react-icons/di";

import "../styles/components/tecnologiesContainer.sass";

const technologies = [
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },

  { id: "git", name: "GIT", icon: <DiGit /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}

            <h3>{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
