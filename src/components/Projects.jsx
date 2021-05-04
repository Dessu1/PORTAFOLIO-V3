import React from "react";

const Projects = () => {
  return (
    <section id='projects'>
      <div className='container-projects'>
        <div className='card'>
          <div className='card-title'>
            <p>Tesis de Grado</p>
          </div>
          <div className='card-img'>
            <img src='https://i.imgur.com/tfenuqW.png' alt='card-img' />
          </div>
          <div className='card-description'>
            <p>
              Actualmente esta en desarrollo una plataforma web para el consumo
              de contenido 3d acorde a las actividades de bienestar de la
              unviersidad Santaigo de Cali
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>
            <p>VR Project</p>
          </div>
          <div className='card-img'>
            <img src='https://i.imgur.com/Igtr9U0.png' alt='card-img' />
          </div>
          <div className='card-description'>
            <p>
              Se llevó a cabo el desarrollo de un videojuego en realidad virtual
              sobre un curso de Quimica para los nuevos estudiantes. El
              desarollo estaba enfocado para un uso mediante un navegador
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='card-title'>
            <p>Carrito de Compras</p>
          </div>
          <div className='card-img'>
            <img src='https://i.imgur.com/NjDtM3Q.png' alt='card-img' />
          </div>
          <div className='card-description'>
            <p>Desarrollo de un carrito de compras usando javascript vanila</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
