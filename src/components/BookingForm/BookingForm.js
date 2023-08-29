import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BookingForm.module.css";

const BookingForm = ({ availableTimes, dispatch }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: new Date().toISOString().slice(0, 10),
    time: "17:00",
    guests: "1",
    occasion: "Birthday",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/success", { state: formData }); // Redirect to the success page
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "date") {
      // generates new time slots each time user changes date
      dispatch({ type: "UPDATE_TIMES", date: new Date(value) });
    }
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
          min={new Date().toISOString().slice(0, 10)} // Minimum date is the current date
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
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
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
