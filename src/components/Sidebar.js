import Avatar from "../img/hugo.JPEG";
import SocialNetworks from "./SocialNetworks";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Hugo Miranda Lomba" />

      <p className="title">Desenvolvedor Web</p>
      <SocialNetworks />

      <button href="#" className="btn grow">
        Download Currículo
      </button>
    </aside>
  );
};

export default Sidebar;
