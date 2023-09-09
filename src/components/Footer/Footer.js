import altLogo from "../../assets/alt-logo.webp";
import Nav from "../Nav/Nav";
import styles from "./Footer.module.css";
import { ReactComponent as TwitterLogo } from "../../assets/twitter-logo.svg";
import { ReactComponent as YoutubeLogo } from "../../assets/youtube-logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className={styles.logoContainer}>
        <img src={altLogo} alt="Alternative Little Lemon logo" />
      </div>
      <div className={styles.footerBody}>
        <Nav useFooterStyles  />
        <div className={styles.contactContainer}>
          <h3>Contact Us:</h3>
          <address>
            <p>
              Address:
              <br /> 56 Cypress DriveSouthington <br /> CT 06489
            </p>
            <p>Phone number: (248) 762-0356</p>
            <p>Email: contactus@llemon.biz </p>
          </address>
        </div>
        <div className={styles.socialsContainer}>
          <h3>Our Socials:</h3>
          <div className={styles.linksContainer}>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter"
            >
              <TwitterLogo />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Youtube"
            >
              <YoutubeLogo />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
