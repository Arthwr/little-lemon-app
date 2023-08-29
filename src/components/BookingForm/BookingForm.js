import { useState } from "react";
import styles from "./BookingForm.module.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "17:00",
    guests: "1",
    occasion: "Birthday",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    showSuccessModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const showSuccessModal = () => {
    alert("Booking Form successfuly submitted!");
    setFormData((prevData) => ({
      ...prevData,
      date: "",
    }));
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.mainTitle}>Book your table today</h1>
      <form onSubmit={handleSubmit} className={styles.formBody}>
        <label className={styles.label} htmlFor="res-date">
          Choose date:
        </label>
        <input
          onChange={handleChange}
          value={formData.date}
          type="date"
          id="res-date"
          name="date"
          required
          aria-label="Choose Date"
        />

        <label className={styles.label} htmlFor="res-time">
          Choose time:
        </label>
        <select
          onChange={handleChange}
          value={formData.time}
          id="res-time"
          name="time"
        >
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
        <input
          onChange={handleChange}
          value={formData.guests}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="guests"
          aria-label="Number of guests"
        />
        <label className={styles.label} htmlFor="occasion">
          Occasion:
        </label>
        <select
          onChange={handleChange}
          value={formData.occasion}
          id="occasion"
          name="occasion"
        >
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
