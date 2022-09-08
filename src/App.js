import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";

import { useState } from "react";
import "./styles/app.css";

import Modal from "react-modal";
import exitIntent from "exit-intent";
import ModalZelda from "./components/ModalZelda";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {
  const [visibility, setVisibility] = useState(false);

  const removeExitIntent = exitIntent({
    threshold: 1,
    maxDisplays: 1,
    eventThrottle: 0,
    onExitIntent: () => {
      setVisibility(true);
    },
  });

  return (
    <div id="portfolio">
      <Navbar2 />
      <div className="middle-content">
        <Sidebar />
        <MainContent />
      </div>
      <div>
        {/* <Modal
          className="modal-component"
          overlayClassName="modal-component-overlay"
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
        > */}
        {visibility && <ModalZelda />}
        {/* </Modal> */}
      </div>

      <Footer />
    </div>
  );
}

export default App;
