// import "../styles/components/modal.css";

import { useState } from "react";

let visibilityClass = "modal visible";

const Modal = () => {
  const [visibility, setVisibility] = useState("modal visible");

  const closeModal = (event) => {
    setVisibility("modal invisible");
  };

  return (
    <div id="zeldaModal" className={visibility}>
      <div className="modal-content">
        <span onClick={closeModal} className="close">
          &times;
        </span>
        <div className="message-container fade-in">
          <p className="modal-message">
            <span>it's </span>
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
        <div className="resume-container">
          <img
            id="sword"
            src="https://raw.githubusercontent.com/pin0S/zelda-meme-modal/main/assets/sword.jpg"
          />
          <a href="#" id="resume">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
