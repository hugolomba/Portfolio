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
            Sou desenvolvedor Frontend e tenho conhecimento/experiência em
            ReactJs, JavaScript, HTML, CSS, ExpressJs, NodeJs e metodologias
            ágeis.
            <p>
              Atualmente estou na reta final do Bootcamp de Desenvolvimento Web
              Fullstack, na Ironhack São Paulo e estou focado em desenvolver
              projetos para colocar em prática o que venho estudando no bootcamp
              e em outros cursos complementares. Meus projetos podem ser
              encontrados no meu GitHub e no meu site/portfólio pessoal. No
              momento estou me aprofundando em ReactJs e estudando React Native
              e TypeScript.
            </p>
            <p>
              Tenho seis anos de vivência no maior banco da América Latina, onde
              adquiri uma vasta experiência com atendimento ao cliente,
              negócios, gestão de processos, gestão de pessoas, liderança e
              trabalho em equipe.
            </p>
            {/* <p>
              Sempre fui apaixonado por tecnologia, por isso dedicidi fazer essa
              migração para a área.
            </p> */}
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
