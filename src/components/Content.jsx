import React from "react";
import About from "./About";
import Projects from "./Projects";
import SocialMedia from "./SocialMedia";

const Content = () => {
  return (
    <main id='content'>
      <div className='description'>
        <p>Bienvenido a mi Portafolio personal</p>
      </div>
      <About />
      <Projects />
      <SocialMedia />
    </main>
  );
};

export default Content;
