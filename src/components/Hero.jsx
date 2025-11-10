// src/components/Hero.jsx

import React from 'react';
import HeroImage from '../assets/img/hero-nasgor.jpg'; 

const heroStyle = {
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
};

const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const Hero = () => {
  return (
    <div 
      className="d-flex align-items-center justify-content-center"
      style={heroStyle}
    >
      <div style={overlayStyle}></div>

      {/* Tambahkan div.container di sini */}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center text-white p-4 p-md-5 mx-auto" style={{ maxWidth: '800px' }}>
              
              <h1 className="display-1 fw-bolder mb-3">
                Nasi Goreng <span className="text-warning">BLUZUD</span>
              </h1>
              
              <p className="fs-4 fw-light mb-4 fst-italic">
                "Setiap suapan membawa cita rasa rempah Nusantara yang otentik, dimasak dengan cinta."
              </p>
              
              <a 
                href="#menu" 
                className="btn btn-warning btn-lg fw-bold text-dark text-uppercase shadow-lg"
              >
                Lihat Menu Kami
              </a>
          </div>
      </div>
    </div>
  );
};

export default Hero;