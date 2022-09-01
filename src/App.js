import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";

import { useState } from "react";
import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <Navbar2 />
      <div className="middle-content">
        <Sidebar />
        <MainContent />
      </div>

      <Footer />
    </div>
  );
}

export default App;
