import "../styles/components/navbar.css";
import "../styles/components/switch.css";
// import "../styles/variables.css";
import { Link, NavLink } from "react-router-dom";
import { ImMenu } from "react-icons/im";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiMoonFill } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";
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

      <div className="nav-btn">
        {/* <input type="button" onClick={toggleTheme} /> */}

        <div className="switch">
          <input type="checkbox" name="toggle" onChange={toggleTheme} />
          <RiMoonFill className="toggle-moon-btn" />
          <BsFillSunFill className="toggle-sun-btn" />
          <label htmlFor="toggle">
            <i className="bulb">
              <span className="bulb-center" />
              <span className="filament-1" />
              <span className="filament-2" />
              <span className="reflections">
                <span />
              </span>
              <span className="sparks">
                <i className="spark1" />
                <i className="spark2" />
                <i className="spark3" />
                <i className="spark4" />
              </span>
            </i>
          </label>
        </div>

        <div className="menu-btn" onClick={handleClick}>
          {menuStatus ? <AiFillCloseCircle /> : <ImMenu />}
        </div>
      </div>

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
    </nav>
  );
};

export default Navbar;
