import "../styles/components/footer.css";

import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={`footer ${theme}`}>
      <p>Desenvolvido por Hugo Miranda Lomba</p>
    </footer>
  );
};

export default Footer;
