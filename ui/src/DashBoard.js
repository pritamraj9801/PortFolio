import "./Components/Header";
import Header from "./Components/Header";
import WelcomeInfo from "./Components/WelcomeInfo";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import ThemeToggle from "./Components/ThemeToggle";
import ScrollToTop from "./Components/ScrollToTop";
import Articles from "./Components/Articles";
function DashBoard() {
  return (
    <div id="mainContainer">
      <Header />
      <WelcomeInfo />
      {/* <Quotes/> */}
      <Skills/>
      <About/>
      <Projects/>
      <Articles/>
      <Contact/>
      <Footer/>
      <ThemeToggle/>
      <ScrollToTop/>
    </div>
  );
}

export default DashBoard;
