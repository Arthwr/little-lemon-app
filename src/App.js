import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";
import Wrapper from "./components/Wrapper/Wrapper";
import "./App.css";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Section width={"100%"} height={"auto"} backgroundColor={"#EDEFEE"}>
        <Wrapper>
          <Header />
          <Nav />
        </Wrapper>
      </Section>
      <Main />
      <Section width={"100%"} height={"auto"} backgroundColor={"#2F2F2F"}>
        <Wrapper>
          <Footer />
        </Wrapper>
      </Section>
    </>
  );
}

export default App;
