import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Publications } from "./components/sections/Publications";
import { Blogs } from "./components/sections/Blogs";
import { Skills } from "./components/sections/Skills";
import { Education } from "./components/sections/Education";
import { Recognition } from "./components/sections/Recognition";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="layout">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Blogs />
        <Skills />
        <Education />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
