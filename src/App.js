import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

import { useState } from "react";
import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      {/* <h1>{"< / >"}</h1> */}
      <Navbar />
      <Sidebar />
      <MainContent />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
