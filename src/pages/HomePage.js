import Main from "../components/Main/Main";
import Section from "../components/Section/Section";
import Wrapper from "../components/Wrapper/Wrapper";
import Hero from "../components/Hero/Hero";
import Specials from "../components/Specials/Specials";
import Testimonials from "../components/Testimonials/Testimonial";
import About from "../components/About/About.js";

function HomePage() {
  return (
    <>
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
      <Section width={"100%"} height={"auto"} backgroundColor={"#495E57"}>
        <Wrapper>
          <About />
        </Wrapper>
      </Section>
    </>
  );
}

export default HomePage;
