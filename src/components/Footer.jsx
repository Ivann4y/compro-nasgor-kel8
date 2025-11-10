// src/components/Footer.jsx

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-5">
      {/* Container utama diubah menjadi "container" biasa agar konten lebih terpusat */}
      <div className="container">
        {/* Tambahkan 'justify-content-center' dan 'text-center' untuk rata tengah pada row dan teks di dalamnya */}
        {/* border-bottom border-secondary tetap agar garis pemisah ada */}
        <div className="row pb-4 mb-4 g-4 border-bottom border-secondary justify-content-center text-center">
          {/* Kolom 1: Nama dan Deskripsi Singkat */}
          <div className="col-md-4">
            <h3 className="fs-4 fw-bold text-warning mb-3">
              Nasi Goreng Bluzud
            </h3>
            <p className="text-secondary small">
              Rasa otentik resep turun temurun, menyajikan nasi goreng terbaik
              di kota Anda sejak 2010.
            </p>
          </div>

          {/* Kolom 2: Kontak Cepat */}
          <div className="col-md-4">
            <h4 className="fs-5 fw-semibold mb-3">Hubungi Kami</h4>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2">
                <a
                  href="tel:0812xxxxxxxx"
                  className="text-decoration-none text-secondary"
                >
                  📞 Telepon: 0812-XXXX-XXXX
                </a>
              </li>
              <li>
                <span className="d-block">
                  📍 Alamat: jl.jati pilar No.6, Serang, Cikarang Sel.,
                  Kabupaten Bekasi, Jawa Barat 17530
                </span>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Media Sosial & Pesan Online */}
          <div className="col-md-4">
            <h4 className="fs-5 fw-semibold mb-3">Ikuti Kami</h4>

            {/* Untuk ikon WhatsApp: */}
            {/* d-flex dan gap-3 untuk ikon, serta 'justify-content-center' agar ikon di tengah */}
            <div className="d-flex gap-3 fs-3 justify-content-center">
              <a
                href="https://wa.me/6285812109582"
                className="text-secondary social-icon" // Tambahkan class 'social-icon' untuk styling hover
                aria-label="WhatsApp"
                // Tambahkan kelas Bootstrap untuk efek hover atau transisi jika perlu
              >
                <i className="bi bi-whatsapp"></i> {/* Ikon WhatsApp */}
              </a>
            </div>

            <h4 className="fs-5 fw-semibold mt-4 mb-2">Pesan Online</h4>
            {/* d-flex dan gap-3, serta 'justify-content-center' agar link di tengah */}
            <div className="d-flex gap-3 justify-content-center">
              <a
                href="https://gofood.link/a/M16Yssd"
                className="text-success fw-bold text-decoration-none hover-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                GoFood
              </a>

              {/* GRABFOOD LINK */}
              <a
                href="https://r.grab.com/g/6-20251110_212103_05aa7996862549568e7e1a38337db588_MEXMPS-6-C23CDFNGTPVFN2"
                className="text-info fw-bold text-decoration-none hover-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                GrabFood
              </a>
            </div>
          </div>
        </div>

        {/* Hak Cipta - sudah center, biarkan saja */}
        <div className="text-center text-secondary small">
          &copy; {currentYear} Nasi Goreng Mantap Jiwa. Semua Hak Cipta
          Dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
