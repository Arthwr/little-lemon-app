import greekSalad from "../../assets/greek-salad.webp";
import bruchetta from "../../assets/bruchetta.webp";
import lemonDessert from "../../assets/lemon-dessert.webp";
import Card from "../Card/Card";
import styles from "./Specials.module.css";

const data = [
  {
    title: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: 12.99,
    getImageSrc: () => greekSalad,
  },
  {
    title: "Bruchetta",
    description:
      "Our Brushetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: 12.99,
    getImageSrc: () => bruchetta,
  },
  {
    title: "Lemon Dessert",
    description:
      "This comes from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: 12.99,
    getImageSrc: () => lemonDessert,
  },
];

const Specials = ({ children }) => {
  return (
    <div className={styles.specialsBox}>
      <div className={styles.specialsHead}>
        <h2 className={styles.h2}>This weeks specials!</h2>
        <button className={styles.button}>Online Menu</button>
      </div>
      <div className={styles.cardList}>
        {data.map((cardData) => (
          <Card
            key={cardData.title}
            title={cardData.title}
            price={cardData.price}
            description={cardData.description}
            imageSrc={cardData.getImageSrc()}
          />
        ))}
      </div>
    </div>
  );
};

export default Specials;
