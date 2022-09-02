import Avatar from "../img/hugo.JPEG";

import sunglasses from "../img/sunglasses.png";

import profile from "../img/profile.png";
import profileLight from "../img/profile-light.png";
import SocialNetworks from "./SocialNetworks";
import resume from "../files/resume.pdf";

import "../styles/components/sidebar.css";
import InformationContainer from "./InformationContainer";

import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <aside id="sidebar" className={theme}>
      {/* <img src={theme ? profileLight : profile} alt="Hugo Miranda Lomba" /> */}
      <img src={profile} alt="Hugo Miranda Lomba" />

      <img
        className={theme ? "sunglasses-img" : "sunglasses-invisible"}
        src={sunglasses}
        alt="Hugo Miranda Lomba"
      />

      <p className="title">Desenvolvedor Web</p>
      <SocialNetworks />

      <a href={resume} download="Hugo Miranda Lomba">
        <button href="#" className="btn grow">
          Download Currículo
        </button>
      </a>
    </aside>
  );
};

export default Sidebar;
