import SocialNetworks from "../components/SocialNetworks";
import "../styles/components/home.css";

import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

import { Fade } from "react-awesome-reveal";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`home-container ${theme}`}>
      {/* <Typewriter
        options={{
          strings: ["Olá Mundo!"],
          autoStart: true,
          loop: true,
        }}
      /> */}
      <p>Olá Mundo! Eu sou</p>

      <h1>Hugo Miranda Lomba</h1>

      <p>Aqui você pode encontrar um pouco de mim e dos meus trabalhos.</p>
      <p>Esteja à vontade para se conectar comigo em algum dos links abaixo</p>
      <SocialNetworks />
    </div>
  );
};

export default Home;
