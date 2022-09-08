import "../styles/components/modal.css";
import resume from "../files/resume.pdf";
import { useState } from "react";

let visibilityClass = "modal visible";

const Modal = () => {
  const [visibility, setVisibility] = useState("modal-content visible");

  const closeModal = (event) => {
    setVisibility("modal-content invisible");
  };

  return (
    <div id="zeldaModal" className={visibility}>
      <span onClick={closeModal} className="close">
        &times;
      </span>
      <div className="message-container fade-in">
        <p className="modal-message">
          <span>It`s </span>
          <span>dangerous </span>
          <span>to </span>
          <span>go </span>
          <br />
          <span>alone! </span>
          <span>take </span>
          <span>this.</span>
        </p>
      </div>
      <div className="icon-container">
        <img
          src="https://raw.githubusercontent.com/pin0S/zelda-meme-modal/main/assets/flame.png"
          id="flame-one"
          className="flame image"
        />
        <img
          src="https://raw.githubusercontent.com/pin0S/zelda-meme-modal/96970eadd5059c2b0e5f2884ac85a1392f3b633d/assets/oldman.svg"
          className="image"
          id="old-man"
        />
        <img
          src="https://raw.githubusercontent.com/pin0S/zelda-meme-modal/main/assets/flame.png"
          id="flame-two"
          className="flame image"
        />
      </div>
      <div className="resume-modal-container">
        <img
          id="sword"
          src="https://raw.githubusercontent.com/pin0S/zelda-meme-modal/main/assets/sword.jpg"
        />
        <a href={resume} download="Hugo Miranda Lomba" id="resume">
          Meu Currículo
        </a>
      </div>
    </div>
  );
};

export default Modal;
