import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import footerStyles from "../Footer/FooterNav.module.css";

const Nav = ({ useFooterStyles }) => {
  const navStyles = useFooterStyles ? footerStyles : styles;

  return (
    <nav>
      <ul className={navStyles["nav-list"]}>
        <li>
          <Link to="/" className={navStyles["nav-link"]}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/#menu">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <Link to="/">Order Online</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
