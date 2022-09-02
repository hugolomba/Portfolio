import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";
import "../styles/components/resume.css";
import skillsImg from "../img/skills.png";

const Resume = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`resume-container ${theme}`}>
      <h2>Currículo</h2>

      <div className="skills-container">
        <div className="hard-skills">
          <p>Hard Skills</p>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>GIT</li>
            <li>Adobe Photoshop</li>
            <li>Metodologias Ágeis</li>
            <li>Inglês intermediário</li>
          </ul>
        </div>
        <img className="skills-img" src={skillsImg} />
        <div className="soft-skills">
          <p>Soft Skills</p>
          <ul>
            <li>Pensamento Analítico</li>
            <li>Proatividade</li>
            <li>Flexibilidade</li>
            <li>Determinação</li>
            <li>Criatividade</li>
            <li>Curiosidade</li>
            <li>Inteligência Emocional</li>
          </ul>
        </div>
      </div>

      <div className="formation-container">
        <h3>Formação</h3>
        <div className="formation-div">
          <ul>
            <li>
              <h4>Full-Stack Web Development Bootcamp</h4>
              <h5>(Ironhack São Paulo, 06/2022 – 11/2022)</h5>
              <ul>
                <li>Bootcamp intensivo;</li>
                <li>
                  Construção de projetos front-end usando React, HTM, CSS and
                  Bootstrap;
                </li>
                <li>
                  Construção de uma “single page application”usando ReactJs.
                </li>
              </ul>
            </li>
            <li>
              <h4>Graduação em Administração</h4>
              <h5>
                (FASAP - Faculdade Santo Antônio de Pádua, 06/2022 – concluído
                em 2019)
              </h5>
            </li>
          </ul>
        </div>
        <div className="formation-div"></div>
      </div>

      {/* Experiência Profissional */}

      <div className="professional-container">
        <h3>Experiência Profissional</h3>
        <div className="professional-div">
          <ul>
            <li>
              <h4>Itaú Unibanco SA</h4>
              <ul>
                <h5>Cargo: Líder de Tesouraria e Serviços</h5>
                <h6>desde Janeiro/2021</h6>
                <ul>
                  <li>
                    Responsável pelo gerenciamento administrativo de agência,
                    controle de numerário, tecnologia, pessoas e processos.
                  </li>
                </ul>
                <h5>Cargo: Agente de Negócio/Caixa</h5>
                <h6>desde Setembro/2017</h6>
                <ul>
                  <li>Assessoria de produtos financeiros</li>
                </ul>
                <h5>Cargo: Estagiário</h5>
                <h6>desde Dezembro/2016 </h6>
                <ul>
                  <li>
                    Minha forma de ingresso foi o programa de estágio. Tive
                    ótimos resultados e fui efetivado em dez meses.
                  </li>
                </ul>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
