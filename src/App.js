import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";
import Wrapper from "./components/Wrapper/Wrapper";
import "./App.css";
import Main from "./components/Main/Main";
import ScrollToAnchor from "./components/ScrollToAnchor/ScrollToAnchor";
import AppHeader from "./components/AppHeader/AppHeader";

function App() {
  return (
    <>
      <ScrollToAnchor />
      <Section width={"100%"} height={"auto"} backgroundColor={"#EDEFEE"}>
        <Wrapper>
          <AppHeader />
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
