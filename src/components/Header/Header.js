import { ReactComponent as Logo } from "../../assets/Logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <Logo className={styles.logo} />
    </header>
  );
};

export default Header;
