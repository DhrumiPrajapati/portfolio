import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Experience from "./components/Experience/experience";
import Education from "./components/Education/education";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Experience/>
      <Education/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;