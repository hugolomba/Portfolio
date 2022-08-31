import "../styles/components/contactForm.sass";
import emailjs from "emailjs-com";

const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z6rczro",
        "template_fzsltle",
        e.target,
        "vr_yHY29h3PfFos0s"
      )
      .then((res) => {
        window.alert("Mensagem");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="contact-form">
      <form onSubmit={sendEmail}>
        <label>Nome</label>
        <input type="text" name="name" />

        <label>E-mail</label>
        <input type="email" name="user_email" />

        <label>Telefone</label>
        <input type="tel" name="user_tel" />

        <label>Mensagem</label>
        <textarea name="message" rows="4" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
