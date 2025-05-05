import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";

import ProjectSection from "./components/ProjectSection";

import ContactSection from "./components/ContactSection";
function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <ProjectSection />

      <ContactSection />
    </>
  );
}

export default App;
