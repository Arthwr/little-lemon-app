import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import footerStyles from "../Footer/FooterNav.module.css";
import navigationStyles from "./Navigation.module.css";
import openStyles from "./NavContainerOpen.module.css";
import openNavigationStyles from "./NavigationOpen.module.css";

const Nav = ({ useFooterStyles, isMenuOpen }) => {
  const navStyles = useFooterStyles ? footerStyles : styles;
  const containerStyles = isMenuOpen ? openStyles : styles;
  const navStylesForNavigation = isMenuOpen
    ? openNavigationStyles
    : navigationStyles;

  return (
    <div
      className={`${containerStyles["navigation-container"]} ${
        isMenuOpen ? containerStyles["open-menu"] : ""
      }`}
    >
      <nav
        className={`${navStylesForNavigation["navigation"]} ${
          isMenuOpen ? navStylesForNavigation["open-menu"] : ""
        }`}
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
};

export default Nav;
