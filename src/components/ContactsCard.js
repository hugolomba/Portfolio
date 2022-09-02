import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

import "../styles/components/contactsCard.css";

const socialNetworks = [
  {
    name: "linkedin",
    info: "linkedin.com/in/hugolomba",
    link: "http://www.linkedin.com/in/hugolomba",
    icon: <FaLinkedinIn />,
  },
  {
    name: "github",
    info: "github.com/hugolomba",
    link: "https://github.com/hugolomba",
    icon: <FaGithub />,
  },
  {
    name: "tel",
    info: "+55 (22) 981141552",
    link: "tel:+5522981141552",
    icon: <FaPhone />,
  },
  {
    name: "email",
    info: "hmlomba@gmail.com",
    link: "mailto:hmlomba@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    name: "whatsapp",
    info: "+55 (22) 981141552",
    link: "https://api.whatsapp.com/send?phone=5522981141552",
    icon: <FaWhatsapp />,
  },
];

const ContactsCard = () => {
  return (
    <section className="contacts-card">
      {socialNetworks.map((network) => {
        return (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={network.link}
            className="contacts-btn grow"
            id={network.name}
            key={network.name}
          >
            <p>{network.info}</p>
            {network.icon}
          </a>
        );
      })}
    </section>
  );
};

export default ContactsCard;
