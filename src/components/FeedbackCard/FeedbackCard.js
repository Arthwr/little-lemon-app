import starImg from "../../assets/starImg.webp";
import styles from "./FeedbackCard.module.css";

const FeedbackCard = ({ rating, imageSrc, clientName, feedbackText }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <img
        key={`star-${clientName}-${i}`}
        src={starImg}
        alt="star"
        className={styles.starImage}
      />
    );
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.ratingHead}>
        <h3 className={styles.ratingTitle}>Rating:</h3>
        {stars}
      </div>
      <div className={styles.clientContainer}>
        <img className={styles.clientImg} src={imageSrc} alt={clientName} />
        <div className={styles.nameText}>{clientName}</div>
      </div>
      <div className={styles.feedBack}>{feedbackText}</div>
    </div>
  );
};

export default FeedbackCard;
