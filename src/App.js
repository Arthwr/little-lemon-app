import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";
import Wrapper from "./components/Wrapper/Wrapper";
import "./App.css";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <>
      <Router>
        <Section width={"100%"} height={"auto"} backgroundColor={"#EDEFEE"}>
          <Wrapper>
            <Header />
            <Nav />
          </Wrapper>
        </Section>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Section width={"100%"} height={"auto"} backgroundColor={"#2F2F2F"}>
          <Wrapper>
            <Footer />
          </Wrapper>
        </Section>
      </Router>
    </>
  );
}

export default App;
