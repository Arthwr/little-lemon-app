import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";
import Wrapper from "./components/Wrapper/Wrapper";
import Hero from "./components/Hero/Hero";
import Specials from "./components/Specials/Specials";
import Testimonials from "./components/Testimonials/Testimonial";

function App() {
  return (
    <>
      <Section width={"100%"} height={"auto"} backgroundColor={"#EDEFEE"}>
        <Wrapper>
          <Header />
          <Nav />
        </Wrapper>
      </Section>
      <Main>
        <Section width={"100%"} height={"auto"} backgroundColor={"#495E57"}>
          <Wrapper>
            <Hero />
          </Wrapper>
        </Section>
        <Section width={"100%"} height={"auto"} backgroundColor={"#D9D9D9"}>
          <Wrapper>
            <Specials />
          </Wrapper>
        </Section>
        <Section width={"100%"} height={"auto"} backgroundColor={"#EDEFEE"}>
          <Wrapper>
            <Testimonials />
          </Wrapper>
        </Section>
      </Main>
      <Section width={"100%"} height={"auto"} backgroundColor={"#2F2F2F"}>
        <Wrapper>
          <Footer />
        </Wrapper>
      </Section>
    </>
  );
}

export default App;
