import styles from "./BookingForm.module.css";

const BookingForm = () => {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.mainTitle}>Book your table today</h1>
      <form className={styles.formBody}>
        <label className={styles.label} htmlFor="res-date">
          Choose date:
        </label>
        <input type="date" id="res-date" />

        <label className={styles.label} htmlFor="res-time">
          Choose time:
        </label>
        <select id="res-time">
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
        </select>

        <label className={styles.label} htmlFor="guests">
          Number of guests:
        </label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" />

        <label className={styles.label} htmlFor="occasion">
          Occasion:
        </label>
        <select id="occasion">
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <div className={styles.buttonContainer}>
          <button className={styles.submitButton} type="submit">
            Make Your <br /> reservation
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
