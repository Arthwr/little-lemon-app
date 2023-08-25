import heroImage from "../../assets/restauranfood.webp";
import styles from "./Hero.module.css";

const Hero = () => {
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
        <button className={styles.reserveButton}>Reserve a Table</button>
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
