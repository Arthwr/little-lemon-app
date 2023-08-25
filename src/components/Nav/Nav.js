import styles from "./Nav.module.css";
import footerStyles from "./FooterNav.module.css";

const Nav = ({ useFooterStyles }) => {
  const navStyles = useFooterStyles ? footerStyles : styles;

  return (
    <nav>
      <ul className={navStyles["nav-list"]}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
        <li>
          <a href="/order">Order Online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
