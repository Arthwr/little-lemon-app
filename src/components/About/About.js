import marioAdrianA from "../../assets/Mario-and-Adrian-A.webp";
import marioAdrianB from "../../assets/Mario-and-Adrian-B.webp";
import styles from "./About.module.css";

const About = () => {
  return (
    <div id="about" className={styles.aboutContainer}>
      <article>
        <div className={styles.titleContainer}>
          <h2 className={styles.mainTitle}>Little Lemon</h2>
          <h3 className={styles.subTitle}>Chicago</h3>
        </div>
        <div className={styles.textContainer}>
          <p>
            Little Lemon is a cozy neighborhood bistro known for its simple yet
            delicious food and timeless cocktails.
          </p>
          <p>
            Owned by Italian brothers Mario and Adrian, it's the result of their
            dream to own a restaurant. Mario, a chef from Italy, curates the
            menu with care, incorporating family recipes. Adrian manages
            marketing and played a key role in expanding the menu beyond Italian
            dishes.
          </p>
          <p>
            The locally-sourced menu features daily specials, showcasing their
            commitment to fresh options. With Mario's culinary skills and
            Adrian's marketing, Little Lemon is a beloved spot where good food
            and a welcoming atmosphere come together.
          </p>
        </div>
      </article>
      <div className={styles.photoContainer}>
        <img src={marioAdrianA} alt="Mario and Adrian" />
        <img src={marioAdrianB} alt="Mario and Adrian" />
      </div>
    </div>
  );
};

export default About;
