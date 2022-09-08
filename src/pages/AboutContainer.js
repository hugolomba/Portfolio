import "../styles/components/aboutContainer.css";
import "../styles/components/tecnologiesContainer.css";

import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

import { Fade } from "react-awesome-reveal";

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiGit,
  DiSass,
  DiPhotoshop,
} from "react-icons/di";

const AboutContainer = () => {
  const technologies = [
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },

    { id: "git", name: "GIT", icon: <DiGit /> },
    { id: "nodejs", name: "NodeJs", icon: <DiNodejsSmall /> },
    { id: "photoshop", name: "Photoshop", icon: <DiPhotoshop /> },
  ];

  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Sobre mim</h2>
      <section className={`about-container ${theme}`}>
        {/* <span>Oi! 👋</span> */}
        <Fade>
          <p>
            Oi! Meu nome é Hugo Miranda Lomba, eu sou um desenvolvedor Web em
            formação, um entusiasta e apaixonado por tecnologia.
          </p>

          <p>
            Estou em processo de transição para a área de tecnologia, estudando,
            praticando e cursando um bootcamp de Desenvolvimento Web pela
            Ironhacker São Paulo.
          </p>
          <p>
            Criei esse site/portfólio para praticar o que venho aprendendo e
            progredir com as habilidades necessárias para atuar como
            desenvolvedor.
          </p>

          <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
              <Fade cascade="true">
                {technologies.map((tech) => (
                  <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}

                    <h3>{tech.name}</h3>
                  </div>
                ))}
              </Fade>
            </div>
          </section>
        </Fade>
      </section>
    </div>
  );
};

export default AboutContainer;
