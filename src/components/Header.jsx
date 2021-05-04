import React from "react";

const Header = () => {
  return (
    <header id='header'>
      <div className='content-header'>
        <div className='image-content'>
          <img src='https://i.imgur.com/0W4iFfa.jpg' alt='icon-page' />
          <p>
            Portafolio <span>v0.0.1</span>
          </p>
        </div>

        <div className='nav-header'>
          <ul className='list-items'>
            <li className='item'>
              <a href='#about'>Sobre mi</a>
            </li>
            <li className='item'>
              <a href='#projects'>Proyectos</a>
            </li>
            <li className='item'>
              <a href='#social-media'>Redes</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
