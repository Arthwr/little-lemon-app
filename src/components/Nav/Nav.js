import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import footerStyles from "../Footer/FooterNav.module.css";

const Nav = ({ useFooterStyles }) => {
  const navStyles = useFooterStyles ? footerStyles : styles;

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav>
      <ul className={navStyles["nav-list"]}>
        <li>
          <Link to="/" className={navStyles["nav-link"]}>
            Home
          </Link>
        </li>
        <li>
          <a href="#about" onClick={handleClick("about")}>
            About
          </a>
        </li>
        <li>
          <a href="#menu" onClick={handleClick("menu")}>
            Menu
          </a>
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
