import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

import "../styles/components/socialnetworks.css";

const socialNetworks = [
  {
    name: "linkedin",
    link: "http://www.linkedin.com/in/hugolomba",
    icon: <FaLinkedinIn />,
  },
  { name: "github", link: "https://github.com/hugolomba", icon: <FaGithub /> },
  { name: "tel", link: "tel:+5522981141552", icon: <FaPhone /> },
  { name: "email", link: "mailto:hmlomba@gmail.com", icon: <FaEnvelope /> },
  {
    name: "whatsapp",
    link: "https://api.whatsapp.com/send?phone=5522981141552",
    icon: <FaWhatsapp />,
  },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => {
        return (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={network.link}
            className="social-btn grow"
            id={network.name}
            key={network.name}
          >
            {network.icon}
          </a>
        );
      })}
    </section>
  );
};

export default SocialNetworks;
