import "../styles/components/aboutContainer.sass";
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
    { id: "sass", name: "Sass", icon: <DiSass /> },
    { id: "nodejs", name: "NodeJs", icon: <DiNodejsSmall /> },
    { id: "photoshop", name: "Photoshop", icon: <DiPhotoshop /> },
  ];

  return (
    <div>
      <h2>Sobre mim</h2>
      <section className="about-container">
        {/* <span>Oi! 👋</span> */}
        {/* <h1>Hugo Miranda Lomba</h1>
      <span>Desenvolvedor Web</span> */}

        {/* <h1>Oi, meu nome é Hugo Miranda Lomba</h1> */}

        <p>
          Tenho alta capacidade analítica, força de vontade e facilidade para
          aprender, sou proativo, determinado, criativo e curioso. Tenho ótimo
          relacionamento interpessoal e uma vivência de seis anos no setor
          bancários, o que me agregou vasta experiência com trabalho em equipe,
          gestão e entregas de resultados.
        </p>
        <p>
          Tenho alta capacidade analítica, força de vontade e facilidade para
          aprender, sou proativo, determinado, criativo e curioso. Tenho ótimo
          relacionamento interpessoal e uma vivência de seis anos no setor
          bancários, o que me agregou vasta experiência com trabalho em equipe,
          gestão e entregas de resultados.
        </p>
        <p>
          Tenho alta capacidade analítica, força de vontade e facilidade para
          aprender, sou proativo, determinado, criativo e curioso. Tenho ótimo
          relacionamento interpessoal e uma vivência de seis anos no setor
          bancários, o que me agregou vasta experiência com trabalho em equipe,
          gestão e entregas de resultados.
        </p>
        <p>
          Tenho alta capacidade analítica, força de vontade e facilidade para
          aprender, sou proativo, determinado, criativo e curioso. Tenho ótimo
          relacionamento interpessoal e uma vivência de seis anos no setor
          bancários, o que me agregou vasta experiência com trabalho em equipe,
          gestão e entregas de resultados.
        </p>
        <p>
          Tenho alta capacidade analítica, força de vontade e facilidade para
          aprender, sou proativo, determinado, criativo e curioso. Tenho ótimo
          relacionamento interpessoal e uma vivência de seis anos no setor
          bancários, o que me agregou vasta experiência com trabalho em equipe,
          gestão e entregas de resultados.
        </p>
        <p>
          Tenho alta capacidade analítica, força de vontade e facilidade para
          aprender, sou proativo, determinado, criativo e curioso. Tenho ótimo
          relacionamento interpessoal e uma vivência de seis anos no setor
          bancários, o que me agregou vasta experiência com trabalho em equipe,
          gestão e entregas de resultados.
        </p>
        <p>
          Tenho alta capacidade analítica, força de vontade e facilidade para
          aprender, sou proativo, determinado, criativo e curioso. Tenho ótimo
          relacionamento interpessoal e uma vivência de seis anos no setor
          bancários, o que me agregou vasta experiência com trabalho em equipe,
          gestão e entregas de resultados.
        </p>

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
      </section>
    </div>
  );
};

export default AboutContainer;
