import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/santhoshkumar-b-18213b129" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Santhoshkumarsk10" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/itzsandy05/" Icon={FaInstagram} />
      <SingleContactSocial link="" Icon={FaWhatsapp} />
    </div>
  );
};

export default ContactSocial;
