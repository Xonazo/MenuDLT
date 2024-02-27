import './App.css'
import React from 'react';
import LogoNavBar from "./components/LogoNavBar"

function Home() {
  return (
  <>
    <LogoNavBar />
      {/* Seccion de imagenes */}
      <section>
        
      </section>
      {/* Seccion del mapa */}
      <section className='ubicacion'>
          <div className='contenido-ubicacion'>
                <div className='contenido-ubicacion_mapa'>
                  <h1>Nos ubicamos en</h1>
                  <iframe className='mapa' width="800" height="450"src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d399.1148078767188!2d-73.14142625944484!3d-36.844428772542805!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scl!4v1699755156103!5m2!1ses!2scl"/>
              </div>
          </div>
      </section>
  </>
  );
}

export default Home;
