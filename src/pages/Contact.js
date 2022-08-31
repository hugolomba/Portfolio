import ContactForm from "../components/ContactForm";
import ContactsCard from "../components/ContactsCard";

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact</h2>
      <div className="container-contact">
        <ContactsCard />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
