import Wrapper from "../components/Wrapper/Wrapper";
import Section from "../components/Section/Section";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const formData = location.state;

  // Styles
  const mainTitle = {
    fontFamily: "Markazi Text",
    fontSize: "64px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    marginTop: "55px",
    marginBottom: "53px",
    textAlign: "center",
  };

  const mainText = {
    color: "#edefee",
    fontFamily: "Karla",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    textAlign: "center",
  };
  // Styles end

  useEffect(() => {
    document.title = "Booking Successful - Little Lemon";
  }, []);

  return (
    <>
      <Section width="100%" height="auto" backgroundColor={"#495E57"}>
        <Wrapper>
          <div>
            <h2 style={mainTitle}>Booking Successful!</h2>
            <p style={mainText}>
              Your reservation has been confirmed with next details:
            </p>
            <p style={mainText}>Date: {formData.date}</p>
            <p style={mainText}>Time: {formData.time}</p>
            <p style={mainText}>Guests: {formData.guests}</p>
            <p style={{ ...mainText, marginBottom: "50px" }}>
              Occasion: {formData.occasion}
            </p>
          </div>
        </Wrapper>
      </Section>
    </>
  );
};

export default SuccessPage;
