// src/components/About.jsx

import React from 'react';
// Pastikan path gambar ini benar
import FilosofiImage from '../assets/img/filosofi-bumbu.jpg'; 

const About = () => {
  return (
    // Container untuk membatasi lebar konten
    <div className="container py-4">
      
      {/* Judul: text-center, display-4 */}
      <div className="text-center mb-5">
        <h2 className="display-4 fw-bolder text-dark">
          Tentang Kami: Rasa yang Tak Pernah Berubah
        </h2>
        <p className="mt-3 fs-5 text-muted">
          Dari warung kecil hingga menjadi pilihan utama, kami menjaga tradisi.
        </p>
      </div>

      {/* Row untuk tata letak 2 kolom */}
      <div className="row align-items-center g-5">
        
        {/* Kolom Teks (col-md-6) */}
        <div className="col-md-6">
          {/* text-warning (warna oranye/kuning Bootstrap) */}
          <h3 className="fs-2 fw-bold text-warning mb-3">
            Filosofi "Wok Hei" dan Bumbu Rahasia
          </h3>
          <p className="text-secondary mb-3 lh-base">
            Didirikan sejak tahun 2010, <b>Nasi Goreng [Nama UMKM]</b> bukan sekadar makanan, ini adalah warisan. Kami menggunakan resep turun temurun yang mengandalkan bumbu yang diulek sendiri setiap hari, tanpa pengawet, menjamin rasa yang kaya dan segar.
          </p>
          
          {/* Blockquote style kustom dengan border Bootstrap */}
          <p className="text-secondary lh-base fst-italic border-start border-warning border-4 ps-3">
            "Kunci kelezatan kami terletak pada <b>'Wok Hei'</b>, teknik memasak dengan api besar yang memberikan aroma 'gosong' khas, dipadu dengan sentuhan arang yang membuat setiap butir nasi terasa spesial."
          </p>
          
          <p className="text-secondary mt-4 lh-base">
            Kami berkomitmen untuk menggunakan bahan-bahan lokal terbaik, mendukung petani dan nelayan lokal. Rasakan bedanya!
          </p>
        </div>

        {/* Kolom Gambar (col-md-6) */}
        <div className="col-md-6">
          <img 
            // img-fluid untuk responsif, rounded-3, shadow-lg
            className="img-fluid rounded-3 shadow-lg object-fit-cover" 
            src={FilosofiImage} 
            alt="Proses memasak nasi goreng di wajan besar" 
            style={{ maxHeight: '400px', width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;