import "../styles/components/navbar.sass";
import logo from "../img/logo4.png";
import logoSvg from "../img/logo.svg";
import "../styles/components/hover.css";

const Navbar = () => {
  return (
    <nav>
      {/* <img src={logo} alt="logo" className="logo" /> */}
      <img src={logo} alt="logo" className="img-logo" />
      {/* <span className="logo">Hugo Miranda Lomba</span> */}
      {/* <h1>Hugo Miranda Lomba</h1> */}
      <div className="nav-buttons">
        <span className="nav-btn">Currículo</span>
        <span className="nav-btn">Contato</span>
      </div>
    </nav>
  );
};

export default Navbar;
