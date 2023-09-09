import { forwardRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import footerStyles from "../Footer/FooterNav.module.css";

const Nav = forwardRef(({ useFooterStyles, isMenuOpen }, ref) => {
  const navStyles = useFooterStyles ? footerStyles : styles;

  return (
    <div
      className={`${navStyles["navContainer"]} ${
        isMenuOpen ? navStyles["open"] : ""
      }`}
    >
      <nav
        className={`${navStyles["nav"]} ${isMenuOpen ? navStyles["open"] : ""}`}
      >
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
    </div>
  );
});

export default Nav;
