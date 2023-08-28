import Section from "../components/Section/Section.js";
import BookingForm from "../components/BookingForm/BookingForm";
import Wrapper from "../components/Wrapper/Wrapper";

function BookingPage() {
  return (
    <>
      <Section width="100%" height="auto" backgroundColor={"#495E57"}>
        <Wrapper>
          <BookingForm />
        </Wrapper>
      </Section>
    </>
  );
}

export default BookingPage;
