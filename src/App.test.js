import { fireEvent, render, screen } from "@testing-library/react";
import BookingPage from "./pages/BookingPage";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "./components/BookingForm/BookingForm";
import userEvent from "@testing-library/user-event";

// mock availableTimes data
const availableTimes = ["17:00", "17:30", "18:00"];
// mock dispatch function
const mockDispatch = jest.fn();

// Test for BookingForm label to exist

test("render BookingForm label", () => {
  render(
    <MemoryRouter>
      <BookingPage availableTimes={availableTimes} />
    </MemoryRouter>
  );
  const headingElement = screen.getByText("Book your table today");
  expect(headingElement).toBeInTheDocument();
});

// Test for valid date (greater than or equal to the current date)

test("valid date input", () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
    </MemoryRouter>
  );
  const dateInput = screen.getByLabelText("Choose Date");
  fireEvent.change(dateInput, { target: { value: "2023-09-10" } });

  expect(dateInput.value).toBe("2023-09-10");
  expect(mockDispatch).toHaveBeenCalledWith({
    type: "UPDATE_TIMES",
    date: new Date("2023-09-10"),
  });
});

