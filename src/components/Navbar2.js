import "../styles/components/navbar.sass";
import logo from "../img/logo4.png";
import logoSvg from "../img/logo.svg";
import "../styles/components/hover.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* <img src={logo} alt="logo" className="logo" /> */}
      {/* <img src={logo} alt="logo" className="img-logo" /> */}
      {/* <span className="logo">Hugo Miranda Lomba</span> */}
      <div className="main-tittle">
        <span>{"<"}</span>
        <h1>HUGO MIRANDA</h1>
        <span>{">"}</span>
      </div>

      <ul className="navbar-menu">
        <NavLink to="/">
          {" "}
          <li>Início</li>{" "}
        </NavLink>
        <NavLink to="/about">
          <li>Quem sou eu</li>
        </NavLink>
        <NavLink to="/resume">
          <li>Currículo</li>{" "}
        </NavLink>
        <NavLink to="/projects">
          <li>Projetos</li>{" "}
        </NavLink>
        <NavLink to="/contact">
          <li>Contato</li>{" "}
        </NavLink>
      </ul>

      {/* <div className="nav-buttons">
        <span className="nav-btn">Currículo</span>
        <span className="nav-btn">Contato</span>
      </div> */}
    </nav>
  );
};

export default Navbar;
