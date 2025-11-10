// src/data/menuData.js

/**
 * Fungsi untuk memformat angka menjadi format mata uang Rupiah (IDR).
 * Contoh: 18000 -> Rp 18.000
 */
export const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(angka);
};


/**
 * Data Menu Statis
 */
export const menu = [
    {
        id: 1,
        nama: "Nasi Goreng Spesial 'Wok Hei'",
        kategori: "Nasi Goreng Andalan",
        deskripsi: "Nasi goreng dengan bumbu racikan rahasia, telur, ayam suwir, dan udang, dimasak dengan teknik api besar untuk aroma 'gosong' khas.",
        harga: 25000,
        isAndalan: true,
    },
    {
        id: 2,
        nama: "Nasi Goreng Ayam",
        kategori: "Nasi Goreng Andalan",
        deskripsi: "Nasi goreng klasik dengan potongan daging ayam yang empuk.",
        harga: 20000,
        isAndalan: false,
    },
    {
        id: 3,
        nama: "Nasi Goreng Seafood Pedas",
        kategori: "Nasi Goreng Andalan",
        deskripsi: "Perpaduan udang dan cumi segar dengan level pedas yang bisa disesuaikan.",
        harga: 28000,
        isAndalan: true,
    },
    {
        id: 4,
        nama: "Nasi Goreng Seafood Pedas",
        kategori: "Nasi Goreng Andalan",
        deskripsi: "Perpaduan udang dan cumi segar dengan level pedas yang bisa disesuaikan.",
        harga: 28000,
        isAndalan: true,
    },
    {
        id: 5,
        nama: "Nasi Goreng Seafood Pedas",
        kategori: "Nasi Goreng Andalan",
        deskripsi: "Perpaduan udang dan cumi segar dengan level pedas yang bisa disesuaikan.",
        harga: 28000,
        isAndalan: true,
    },
    {
        id: 6,
        nama: "Mie Goreng Jawa",
        kategori: "Varian Mie dan Bihun",
        deskripsi: "Mie kuning dimasak kental dengan sayuran, telur, dan bumbu manis gurih otentik Jawa.",
        harga: 22000,
        isAndalan: false,
    },
    {
        id: 7,
        nama: "Bihun Goreng Oriental",
        kategori: "Varian Mie dan Bihun",
        deskripsi: "Bihun yang tipis dan lembut dimasak dengan kecap asin dan sayuran renyah.",
        harga: 20000,
        isAndalan: false,
    },
    {
        id: 8,
        nama: "Kerupuk Udang",
        kategori: "Tambahan",
        deskripsi: "Kerupuk udang renyah untuk pelengkap hidangan.",
        harga: 5000,
        isAndalan: false,
    },
    {
        id: 9,
        nama: "Telur Ceplok/Dadar",
        kategori: "Tambahan",
        deskripsi: "Telur yang dimasak sesuai selera Anda.",
        harga: 4000,
        isAndalan: false,
    },
];