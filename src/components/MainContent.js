import "../styles/components/maincontent.css";
import AboutContainer from "../pages/AboutContainer";
import ProjectsContainer from "../pages/ProjectsContainer";
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
// import TechnologiesContimport { useContext } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

import { Routes, Route } from "react-router-dom";

const MainContent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <main className={`main-content ${theme}`}>
      {/* <AboutContainer /> */}
      <button className="toggle-theme-btn" onClick={toggleTheme}>
        Mudar
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutContainer />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<ProjectsContainer />} />
        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
};

export default MainContent;
