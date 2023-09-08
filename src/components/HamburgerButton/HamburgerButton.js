import styles from "./HamburgerButton.module.css";

const HamburgerButton = ({ toggleMenu, isMenuOpen }) => {
  const handleClick = () => {
    toggleMenu();
  };
  return (
    <div className={styles["hamburger-menu"]} onClick={handleClick}>
      <div
        className={`${styles["bar"]} ${isMenuOpen ? styles["open"] : ""}`}
      ></div>
      <div
        className={`${styles["bar"]} ${isMenuOpen ? styles["open"] : ""}`}
      ></div>
      <div
        className={`${styles["bar"]} ${isMenuOpen ? styles["open"] : ""}`}
      ></div>
    </div>
  );
};

export default HamburgerButton;
