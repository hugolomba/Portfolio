import ContactForm from "../components/ContactForm";
import ContactsCard from "../components/ContactsCard";
import AfterForm from "../components/AfterForm";
import "../styles/components/contact.css";
import { useState } from "react";

const Contact = () => {
  const [formSent, setSent] = useState(false);

  return (
    <div className="contact-page">
      <h2>Contact</h2>
      <div className="container-contact">
        <ContactsCard />
        {formSent ? (
          <AfterForm sent={setSent} />
        ) : (
          <ContactForm sent={setSent} />
        )}
        {/* <ContactForm /> */}
      </div>
    </div>
  );
};

export default Contact;
