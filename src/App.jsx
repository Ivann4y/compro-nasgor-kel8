// src/App.jsx

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      
      {/* pt-5 (padding top) untuk memberi ruang dari header fixed Bootstrap */}
      <main className="pt-5">
        
        {/* ID 'home' untuk navigasi */}
        <div id="home">
          <Hero />
        </div>

        {/* SECTION: ABOUT: section-padding untuk smooth scroll offset */}
        <section id="about" className="section-padding py-5 bg-light">
          <About />
        </section>

        {/* SECTION: MENU */}
        <section id="menu" className="section-padding py-5">
          <Menu />
        </section>

        {/* SECTION: LOCATION */}
        <section id="location" className="section-padding py-5 bg-light">
          <Location />
        </section>
        
      </main>
      
      <Footer />
    </>
  );
}

export default App;