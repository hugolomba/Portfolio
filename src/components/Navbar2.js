import "../styles/components/navbar.css";
// import "../styles/variables.css";
import { Link, NavLink } from "react-router-dom";
import { ImMenu } from "react-icons/im";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setMenuStatus(!menuStatus);
    console.log(menuStatus);
  };

  const handleClickLink = () => (menuStatus ? setMenuStatus(!menuStatus) : "");

  return (
    <nav className={theme}>
      <Link to="/">
        <div className="main-tittle">
          <span>{"<"}</span>
          <h1>HUGO MIRANDA</h1>
          <span>{">"}</span>
        </div>
      </Link>

      <input type="checkbox" onClick={toggleTheme} />

      <ul
        className={`navbar-menu ${menuStatus ? "menu-active" : "navbar-menu"}`}
      >
        <NavLink onClick={handleClickLink} to="/">
          {" "}
          <li>Início</li>{" "}
        </NavLink>
        <NavLink onClick={handleClickLink} to="/about">
          <li>Sobre mim</li>
        </NavLink>
        <NavLink onClick={handleClickLink} to="/resume">
          <li>Currículo</li>{" "}
        </NavLink>
        <NavLink onClick={handleClickLink} to="/projects">
          <li>Projetos</li>{" "}
        </NavLink>
        <NavLink onClick={handleClickLink} to="/contact">
          <li>Contato</li>{" "}
        </NavLink>
      </ul>

      <div className="menu-btn" onClick={handleClick}>
        {menuStatus ? <AiFillCloseCircle /> : <ImMenu />}
      </div>

      {/* <div className="nav-buttons">
        <span className="nav-btn">Currículo</span>
        <span className="nav-btn">Contato</span>
      </div> */}
    </nav>
  );
};

export default Navbar;
