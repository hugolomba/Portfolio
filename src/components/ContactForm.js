import "../styles/components/contactForm.sass";
import emailjs from "emailjs-com";
import { FaStarAndCrescent } from "react-icons/fa";
import { useState } from "react";

const ContactForm = (props) => {
  const [formSent, setSent] = useState(false);

  console.log(props);

  const handleReset = () => {
    const arrForm = Array.from(document.querySelectorAll("input, textarea"));
    console.log("arrForm".arrForm);
    arrForm.forEach((input) => {
      console.log(input);
      if (input.type !== "submit" || input.tyoe !== "reset") {
        input.value = "";
      }
    });
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z6rczro",
        "template_fzsltle",
        e.target,
        "vr_yHY29h3PfFos0s"
      )
      .then(() => {
        props.sent(true);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="contact-form">
      <h3>Você também pode me enviar uma mensagem por aqui</h3>
      <form onSubmit={sendEmail}>
        <label>Nome</label>
        <input type="text" name="name" required />

        <label>E-mail</label>
        <input type="email" name="user_email" required />

        <label>Telefone</label>
        <input type="tel" name="user_tel" required />

        <label>Mensagem</label>
        <textarea name="message" rows="10" />
        <div className="form-btn-container">
          <button className="grow" type="reset">
            {" "}
            Reset{" "}
          </button>
          <button className="grow" type="submit">
            {" "}
            Enviar{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
