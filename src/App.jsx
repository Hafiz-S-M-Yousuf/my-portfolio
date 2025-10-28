import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Social from "./components/Social";


import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Hafiz Syed Muhammad Yousuf</h1>
        <p>Web Developer</p>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
           <a href="#social">Social</a>
        <Social />
        </nav>
      </header>

      <main>
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer>
        <p>{new Date().getFullYear()} Hafiz Syed Muhammad Yousuf</p>
      </footer>
    </div>
  );
}

export default App;
