import "../styles/components/maincontent.sass";
import AboutContainer from "../pages/AboutContainer";
import ProjectsContainer from "../pages/ProjectsContainer";
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
// import TechnologiesContainer from "./TechnologiesContainer";
import "../styles/components/tecnologiesContainer.sass";
import { Routes, Route } from "react-router-dom";

const MainContent = () => {
  return (
    <main id="main-content">
      {/* <AboutContainer /> */}
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
