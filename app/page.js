import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>

      <Projects></Projects>
      <Skills></Skills>
      <ContactForm></ContactForm>
    </div>
  );
}
