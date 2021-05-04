import React from "react";

const About = () => {
  return (
    <section id='about'>
      <div className='content-about'>
        <p>Desarrollador Front-End</p>
        <p>
          Actualmente enfocado en el desarrollo con ReactJs, Javascript, SASS.
        </p>
      </div>
      <div className='skills'>
        <h2>Conocimientos</h2>

        <div className='content-skills'>
          <li>
            <p>
              HTML 5
              <span className='procentaje'>
                90 <span>%</span>
              </span>
            </p>
            <span className='bar'>
              <span className='html'></span>
            </span>
          </li>

          <li>
            <p>
              CSS
              <span className='procentaje'>
                75 <span>%</span>
              </span>
            </p>
            <span className='bar'>
              <span className='css'></span>
            </span>
          </li>

          <li>
            <p>
              SASS
              <span className='procentaje'>
                70 <span>%</span>
              </span>
            </p>
            <span className='bar'>
              <span className='sass'></span>
            </span>
          </li>

          <li>
            <p>
              GIT
              <span className='procentaje'>
                65 <span>%</span>
              </span>
            </p>
            <span className='bar'>
              <span className='git'></span>
            </span>
          </li>

          <li>
            <p>
              React JS
              <span className='procentaje'>
                65 <span>%</span>
              </span>
            </p>
            <span className='bar'>
              <span className='reactjs'></span>
            </span>
          </li>

          <li>
            <p>
              JavaScript
              <span className='procentaje'>
                70 <span>%</span>
              </span>
            </p>
            <span className='bar'>
              <span className='javascript'></span>
            </span>
          </li>
        </div>
      </div>
    </section>
  );
};

export default About;
