import FeedbackCard from "../FeedbackCard/FeedbackCard";
import emilyImg from "../../assets/emily.webp";
import sophiaImg from "../../assets/sophia.webp";
import michaelImg from "../../assets/michael.webp";
import ethanImg from "../../assets/ethan.webp";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const data = [
    {
      clientName: "Emily",
      rating: 4,
      feedbackText:
        "My favorite place to dine. The flavors are always so vibrant, and the service is exceptional.",
      getImageSrc: () => emilyImg,
    },
    {
      clientName: "Sophia",
      rating: 5,
      feedbackText:
        "The dining experience is beyond compare. The dishes are a delightful mix of flavors and textures.",
      getImageSrc: () => sophiaImg,
    },
    {
      clientName: "Michael",
      rating: 4,
      feedbackText:
        "I can't get enough! The ambiance is cozy, and each dish feels like a work of art.",
      getImageSrc: () => michaelImg,
    },
    {
      clientName: "Ethan",
      rating: 5,
      feedbackText:
        "Exceptional taste awaits! The culinary masterpieces they create are second to none.",
      getImageSrc: () => ethanImg,
    },
  ];

  return (
    <div>
      <h2 className={styles.title}>Testimonials</h2>
      <div className={styles.feedbackContainer}>
        {data.map((cardData) => (
          <FeedbackCard
            key={cardData.clientName}
            clientName={cardData.clientName}
            rating={cardData.rating}
            feedbackText={cardData.feedbackText}
            imageSrc={cardData.getImageSrc()}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
