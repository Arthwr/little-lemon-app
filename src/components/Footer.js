import { ReactComponent as Logo } from "../assets/Logo.svg";
import Nav from "./Nav/Nav";

const Footer = () => {
  return (
    <footer>
      <Logo />
      <Nav useFooterStyles/>
    </footer>
  );
};

export default Footer;
