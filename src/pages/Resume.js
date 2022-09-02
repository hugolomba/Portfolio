import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

const Resume = () => {
  const { theme } = useContext(ThemeContext);
  return <div className={theme}>Resume</div>;
};

export default Resume;
