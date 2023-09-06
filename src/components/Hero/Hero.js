import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/restauranfood.webp";
import styles from "./Hero.module.css";

const Hero = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/booking");
  };

  return (
    <div className={styles.heroBox}>
      <div className={styles.heroTextContainer}>
        <div className={styles.titleContainer}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </div>
        <article>
          <p>
            We are family owned <br />
            Mediterranean restaurant <br />
            focused on traditional <br />
            recipes served with a modern <br />
            twist.
          </p>
        </article>
        <button className={styles.reserveButton} onClick={handleRedirect}>
          Reserve a Table
        </button>
      </div>
      <div className={styles.heroImageContainer}>
        <img  
          src={heroImage}
          className={styles.heroImage}
          alt="Restaurant Food"
        />
      </div>
    </div>
  );
};

export default Hero;
