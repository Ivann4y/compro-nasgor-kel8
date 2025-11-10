// src/components/Header.jsx

import React from 'react';

const Header = () => {
  return (
    // navbar-dark, bg-dark, dan fixed-top
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
        
        {/* Container untuk pembatasan lebar konten */}
        <div className="container">
          
          {/* Logo / Nama UMKM */}
          <a href="#home" className="navbar-brand text-warning fs-4 fw-bold">
            Nasi Goreng Bluzud
          </a>
          
          {/* Tombol Toggler untuk Mobile (membutuhkan Bootstrap JS) */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* Link Navigasi */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* ms-auto untuk mendorong link ke kanan */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">Tentang</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#menu">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#location">Lokasi</a>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;