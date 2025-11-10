// src/components/Location.jsx

import React from "react";

const Location = () => {
  // Ganti mapsEmbedUrl dengan iframe URL yang sebenarnya dari Google Maps
  const address =
    "jl.jati pilar No.6, Serang, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530";
  const mapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.302485615105!2d107.12784447453299!3d-6.354875462169251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b7f90ba5b17%3A0xaa89a328ee619a93!2sNasi%20Goreng%20Bluzud!5e0!3m2!1sen!2sid!4v1762778687298!5m2!1sen!2sid";

  return (
    // Container untuk membatasi lebar
    <div className="container py-4">
      {/* Judul */}
      <div className="text-center mb-5">
        <h2 className="display-4 fw-bolder text-dark">Temukan Kami</h2>
        <p className="mt-2 fs-5 text-muted">
          Lokasi mudah dijangkau dan siap melayani Anda!
        </p>
      </div>

      {/* Row untuk grid 2 kolom */}
      <div className="row g-4">
        {/* Kolom Detail Alamat (col-md-6) */}
        <div className="col-md-6">
          <div className="card p-4 shadow-lg h-100">
            <h3 className="fs-3 fw-bold text-warning mb-4">
              Detail Lokasi & Jam Operasional
            </h3>

            <p className="fs-5 mb-3">
              <span className="fw-semibold d-block">Alamat Utama:</span>
              {address}
            </p>

            <p className="fs-5 mb-3">
              <span className="fw-semibold d-block">Jam Buka:</span>
              Setiap Hari: 17:00 - 23:00 WIB
            </p>

            <p className="fs-5 mb-3">
              <span className="fw-semibold d-block">Kontak Telepon:</span>
              0858-1210-9582
            </p>

            <p className="fs-5 fw-semibold text-success mt-4">
              Tersedia di GoFood & GrabFood!
            </p>
          </div>
        </div>

        {/* Kolom Google Maps Embed (col-md-6) */}
        <div className="col-md-6">
          <h3 className="fs-3 fw-bold text-dark mb-3">Peta Lokasi</h3>

          {/* ratio ratio-16x9: Memastikan iframe responsif */}
          <div className="ratio ratio-16x9 border rounded-3 overflow-hidden shadow-lg">
            <iframe
              title="Google Maps Location"
              src={mapsEmbedUrl}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
