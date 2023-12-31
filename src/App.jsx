import React from "react";
import Hero from "./sections/hero";
import About from "./sections/about";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Experience from "./sections/experience";
import Contact from "./sections/contact";
import Navbar from "./components/navbar";



function App() {

  return (
    <div className=" overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
