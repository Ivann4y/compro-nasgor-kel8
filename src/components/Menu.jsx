// src/components/Menu.jsx

import React from "react";
// Pastikan path ini benar
import { menu, formatRupiah } from "../data/menuData";

const Menu = () => {
  // Membuat array unik untuk kategori (misal: "Nasi Goreng Andalan", "Varian Mie...")
  const categories = [...new Set(menu.map((item) => item.kategori))];

  return (
    // Container untuk membatasi lebar konten
    <div className="container py-4">
      <h2 className="display-4 fw-bolder text-center text-dark mb-5">
        Menu Andalan Kami
      </h2>

      {categories.map((kategori) => (
        <div key={kategori} className="mb-5">
          {/* Judul Kategori dengan divider Bootstrap */}
          <h3 className="fs-2 fw-semibold border-bottom border-warning border-4 pb-2 mb-4">
            {kategori}
          </h3>

          {/* Grid responsif: 2 kolom di md, 3 kolom di lg */}
          <div className="row g-4">
            {menu
              .filter((item) => item.kategori === kategori)
              .map((item) => (
                <div key={item.id} className="col-md-6 col-lg-4">
                  {/* Card Bootstrap untuk Item Menu */}
                  <div
                    className={`card h-100 shadow-lg ${
                      item.isAndalan
                        ? "border border-warning bg-light"
                        : "bg-white"
                    }`}
                  >
                    {/* === KONDISIONAL GAMBAR YANG LEBIH SEDERHANA === */}
                    {item.imagePath && item.imagePath !== "" ? (
                      // Opsi 1: Tampilkan Gambar
                      <img
                        src={item.imagePath}
                        className="card-img-top object-fit-cover"
                        alt={item.nama}
                        style={{ height: "200px" }}
                        // Jika gambar gagal dimuat, placeholder akan muncul
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentNode.nextSibling.style.display =
                            "flex"; // Tampilkan card-body
                        }}
                      />
                    ) : (
                      // Opsi 2: Tampilkan Placeholder Nama
                      <div
                        className="card-img-top bg-secondary bg-opacity-10 d-flex h-100 justify-content-center align-items-center"
                        style={{ height: "200px" }}
                      >
                        <div className="text-muted fw-bold p-3 text-center">
                          {item.nama.toUpperCase()}
                        </div>
                      </div>
                    )}
                    {/* === AKHIR KONDISIONAL GAMBAR === */}

                    <div className="card-body">
                      {/* d-flex untuk mensejajarkan Judul dan Badge */}
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h4 className="fs-4 fw-bold text-dark">{item.nama}</h4>
                        {item.isAndalan && (
                          // Badge Bootstrap untuk menandai item favorit
                          <span className="badge bg-danger text-uppercase fw-bold p-2">
                            FAVORIT
                          </span>
                        )}
                      </div>

                      <p className="text-muted small">{item.deskripsi}</p>

                      {/* Harga: fs-3 dan text-warning */}
                      <p className="fs-3 fw-bolder text-warning mt-3">
                        {formatRupiah(item.harga)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
