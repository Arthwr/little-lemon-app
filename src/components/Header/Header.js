import { ReactComponent as Logo } from "../../assets/Logo.svg";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import styles from "./Header.module.css";

const Header = ({ toggleMenu }) => {
  return (
    <header>
      <Logo className={styles.logo} />
      <HamburgerButton toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
