import Section from "../components/Section/Section.js";
import BookingForm from "../components/BookingForm/BookingForm";
import Wrapper from "../components/Wrapper/Wrapper";

function BookingPage({ availableTimes, dispatch }) {
  return (
    <>
      <Section width="100%" height="auto" backgroundColor={"#495E57"}>
        <Wrapper>
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </Wrapper>
      </Section>
    </>
  );
}

export default BookingPage;
