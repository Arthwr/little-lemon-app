import styles from "./HamburgerButton.module.css";

const HamburgerButton = ({ toggleMenu }) => {
  const handleClick = () => {
    toggleMenu();
  };
  return (
    <div className={styles["hamburger-menu"]} onClick={handleClick}>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
    </div>
  );
};

export default HamburgerButton;
