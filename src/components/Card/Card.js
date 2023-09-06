import { Link } from "react-router-dom";
import iconDelivery from "../../assets/iconD.webp";
import styles from "./Card.module.css";

const Card = ({ imageSrc, title, price, description }) => {
  return (
    <div className={styles.cardBox}>
      <img src={imageSrc} alt={title} className={styles.cardImg} />

      <div className={styles.cardText}>
        <h3>{title}</h3>
        <span className={styles.price}>$ {price}</span>
        <p className={styles.textDescription}>{description}</p>
      </div>
      <div className={styles.cardFooter}>
        <Link to='/booking' className={styles.orderCta}>Order a delivery</Link>
        <img src={iconDelivery} className={styles.icon} alt="delivery icon" />
      </div>
    </div>
  );
};

export default Card;
