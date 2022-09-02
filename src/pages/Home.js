import SocialNetworks from "../components/SocialNetworks";
import "../styles/components/home.css";

import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`home-container ${theme}`}>
      <p>Olá Mundo, eu sou</p>
      <h1>Hugo Miranda Lomba</h1>

      <p>Aqui você pode encontrar um pouco de mim e do meu trabalho.</p>
      <p>Esteja à vontade para se conectar comigo em algum dos links abaixo</p>
      <SocialNetworks />
    </div>
  );
};

export default Home;
