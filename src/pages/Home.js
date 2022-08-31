import SocialNetworks from "../components/SocialNetworks";
import "../styles/components/home.sass";

const Home = () => {
  return (
    <div className="home-container">
      <p>Olá Mundo, eu sou</p>
      <h1>Hugo Miranda Lomba</h1>

      <p>Aqui você pode encontrar um pouco de mim e do meu trabalho.</p>
      <p>Esteja à vontade para se conectar comigo em algum dos links abaixo</p>
      <SocialNetworks />
    </div>
  );
};

export default Home;
