import { useEffect, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import BookingPage from "../../pages/BookingPage";
import SuccessPage from "../../pages/SuccessPage";

// <- API mock-up logic START>
const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return () => (s = (s * a) % m) / m;
};

const fetchAPI = (date) => {
  let result = [];
  let random = seededRandom(date.getDate());
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(i + ":00");
    if (random() < 0.5) result.push(i + ":30");
  }

  return result;
};
// <- API mock-up logic END>

// <------Date logic----------------------START>

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action.date);
    default:
      return state;
  }
};

// <------Date logic----------------------END>

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  // Dispatch initial action when component mounts
  useEffect(() => {
    const today = new Date();
    dispatch({ type: "UPDATE_TIMES", date: today });
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </main>
  );
};

export default Main;
