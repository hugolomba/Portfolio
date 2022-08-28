import Avatar from "../img/hugo.JPEG";
import SocialNetworks from "./SocialNetworks";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Hugo Miranda Lomba" />
      {/* <h1>Hugo Miranda Lomba</h1>? */}
      <p className="title">Desenvolvedor Web</p>
      <SocialNetworks />

      <InformationContainer />
      <a href="#" className="btn">
        Download Currículo
      </a>
    </aside>
  );
};

export default Sidebar;
