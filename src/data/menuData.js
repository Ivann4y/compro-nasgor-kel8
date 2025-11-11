// src/data/menuData.js

/**
 * Fungsi untuk memformat angka menjadi format mata uang Rupiah (IDR).
 * Contoh: 18000 -> Rp 18.000
 */
export const formatRupiah = (angka) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(angka);
};

import nasgorGilaImg from "../assets/img/nasgor-gila.jpg";
import nasgorSapiImg from "../assets/img/nasgor-sapi.jpg";
import nasgorGodokImg from "../assets/img/nasi-godok.jpg";
import nasgorSpesialImg from "../assets/img/nasgor-spesial.jpg";
import nasgorSpesialBiasaImg from "../assets/img/nasgor-spesial-biasa.jpg";
import nasgorAyamHatiImg from "../assets/img/nasgor-ayam-hati.jpg";
import nasgorSeafoodImg from "../assets/img/nasgor-seafood.webp";
import nasgorBarbequeImg from "../assets/img/nasgor-barbeque.jpg";
import nasgorBaksoImg from "../assets/img/nasgor-bakso.webp";
import nasgorAyamImg from "../assets/img/nasgor-ayam.jpg";
import nasgorAtiImg from "../assets/img/nasgor-ati.jpg";
import nasgorSosisImg from "../assets/img/nasgor-sosis.webp";
import nasgorPetaiImg from "../assets/img/nasgor-petai.jpg";
import nasgorJengkolImg from "../assets/img/nasgor-jengkol.jpg";
import nasgorJambalImg from "../assets/img/nasgor-jambal.jpg";
import nasgorTeriImg from "../assets/img/nasgor-teri.jpg";
import nasgorMawutImg from "../assets/img/nasgor-mawut.jpg";
import nasgorMawutSpesialImg from "../assets/img/nasgor-mawut-spesial.jpg";
import nasgorBiasaImg from "../assets/img/nasgor-biasa.jpg";
import nasgorVegetarianImg from "../assets/img/nasgor-vegetarian.webp";
import nasgorJawaImg from "../assets/img/nasgor-jawa.jpg";
import nasgorJawaSpesialImg from "../assets/img/nasgor-jawa-spesial.png";

// Mie Section Images
import mieGorengImg from "../assets/img/mie-goreng.webp";
import mieRebusImg from "../assets/img/mie-rebus.jpg";
import mieCampurImg from "../assets/img/mie-campur.jpg";

// Kwetiau Section Images
import kwetiauGorengImg from "../assets/img/kwetiau-goreng.jpg";
import kwetiauRebusImg from "../assets/img/kwetiau-rebus.jpg";
import kwetiauCampurImg from "../assets/img/kwetiau-campur.jpg";

// Bihun Section Images
import bihunGorengImg from "../assets/img/bihun-goreng.jpg";
import bihunRebusImg from "../assets/img/bihun-rebus.webp";
import bihunCampurImg from "../assets/img/bihun-campur.webp";

// Capcay Section Images
import capcayGorengImg from "../assets/img/capcay-goreng.jpeg";
import capcaySeafoodImg from "../assets/img/capcay-seafood.jpg";
import capcayAyamImg from "../assets/img/capcay-ayam.jpeg";
import capcayTelurImg from "../assets/img/capcay-telur.jpg";
import capcayAtiImg from "../assets/img/capcay-ati.jpg";
/**
 * Data Menu Statis
 */
export const menu = [
  // --- Kategori Nasi Goreng ---
  {
    id: 1,
    nama: "Nasi Goreng Gila",
    kategori: "Nasi Goreng Spesial",
    deskripsi:
    "Ditabur sayur, telur, ayam, hati, sosis, seafood, dan pete. Pedas, ramai, dan bikin ketagihan.",
    harga: 25000,
    isAndalan: true,
    imagePath: nasgorGilaImg,
},
{
    id: 2,
    nama: "Nasi Goreng Sapi",
    kategori: "Nasi Goreng Spesial",
    deskripsi:
    "Nasi goreng dimasak dengan potongan daging sapi pilihan yang empuk dan gurih.",
    harga: 25000,
    isAndalan: true,
    imagePath: nasgorSapiImg,
},
{
    id: 3,
    nama: "Nasi Godok/Rebus",
    kategori: "Nasi Goreng Spesial",
    deskripsi:
    "Nasi dengan kuah kaldu kaya rasa, dimasak dengan sayuran, telur, ayam, dan bakso.",
    harga: 25000,
    isAndalan: false,
    imagePath: nasgorGodokImg,
},
{
    id: 4,
    nama: "Nasi Goreng Spesial",
    kategori: "Nasi Goreng Spesial",
    deskripsi: "(Ayam, Hati, Pete, Sosis, Teri, Bakso, Udang, Cumi) - Komplit!",
    harga: 25000,
    isAndalan: false,
    imagePath: nasgorSpesialImg,
},
{
    id: 5,
    nama: "Nasi Goreng Spesial",
    kategori: "Nasi Goreng Biasa",
    deskripsi: "(Ayam, Pete, Sosis, Teri, Bakso) - Porsi standar.",
    harga: 20000,
    isAndalan: false,
    imagePath: nasgorSpesialBiasaImg,
},
{
    id: 6,
    nama: "Nasi Goreng Spesial",
    kategori: "Nasi Goreng Biasa",
    deskripsi: "(Ayam, Hati) - Porsi standar.",
    harga: 20000,
    isAndalan: false,
    imagePath: nasgorAyamHatiImg,
},
{
    id: 7,
    nama: "Nasi Goreng Seafood",
    kategori: "Nasi Goreng Biasa",
    deskripsi: "Dengan udang dan cumi segar.",
    harga: 15000,
    isAndalan: false,
    imagePath: nasgorSeafoodImg,
},
{
    id: 8,
    nama: "Nasi Goreng Barbeque",
    kategori: "Nasi Goreng Biasa",
    deskripsi: "Dimasak dengan saus BBQ, nanas, dan paprika.",
    harga: 15000,
    isAndalan: false,
    imagePath: nasgorBarbequeImg,
},
{
    id: 9,
    nama: "Nasi Goreng Bakso",
    kategori: "Nasi Goreng Biasa",
    deskripsi: "Dengan irisan bakso sapi.",
    harga: 15000,
    isAndalan: false,
    imagePath: nasgorBaksoImg,
},
{
    id: 10,
    nama: "Nasi Goreng Ayam",
    kategori: "Nasi Goreng Biasa",
    deskripsi: "Nasi goreng klasik dengan suwiran ayam.",
    harga: 15000,
    isAndalan: false,
    imagePath: nasgorAyamImg,
},
{
    id: 11,
    nama: "Nasi Goreng Ati",
    kategori: "Nasi Goreng Biasa",
    deskripsi: "Dengan potongan hati ayam.",
    harga: 15000,
    isAndalan: false,
    imagePath: nasgorAtiImg,
},
{
    id: 12,
    nama: "Nasi Goreng Sosis",
    kategori: "Nasi Goreng Biasa",
    deskripsi: "Dengan irisan sosis ayam/sapi.",
    harga: 15000,
    isAndalan: false,
    imagePath: nasgorSosisImg,
},
{
    id: 13,
    nama: "Nasi Goreng Petai",
    kategori: "Nasi Goreng Biasa",
    deskripsi: "Dengan taburan petai.",
    harga: 15000,
    isAndalan: false,
    imagePath: nasgorPetaiImg,
},
{
    id: 14,
    nama: "Nasi Goreng Jengkol",
    kategori: "Nasi Goreng Biasa",
    deskripsi: "Dengan potongan jengkol.",
    harga: 15000,
    isAndalan: false,
    imagePath: nasgorJengkolImg,
},
{
    id: 15,
    nama: "Nasi Goreng Jambal",
    kategori: "Nasi Goreng Biasa",
    deskripsi: "Dengan ikan asin jambal.",
    harga: 15000,
    isAndalan: false,
    imagePath: nasgorJambalImg,
},
{
    id: 16,
    nama: "Nasi Goreng Teri",
    kategori: "Nasi Goreng Biasa",
    deskripsi: "Dengan ikan teri medan.",
    harga: 14000,
    isAndalan: false,
    imagePath: nasgorTeriImg,
},
{
    id: 17,
    nama: "Nasi Goreng Mawut",
    kategori: "Nasi Goreng Biasa",
    deskripsi: "Nasi dicampur mie dengan bumbu khas.",
    harga: 18000,
    isAndalan: false,
    imagePath: nasgorMawutImg,
},
{
    id: 18,
    nama: "Nasi Goreng Mawut Spesial",
    kategori: "Nasi Goreng Biasa",
    deskripsi: "Nasi mawut dengan tambahan isian komplit.",
    harga: 18000,
    isAndalan: false,
    imagePath: nasgorMawutSpesialImg,
},
{
    id: 19,
    nama: "Nasi Goreng Biasa",
    kategori: "Nasi Goreng Biasa",
    deskripsi: "Pilihan paling dasar dan klasik.",
    harga: 13000,
    isAndalan: false,
    imagePath: nasgorBiasaImg,
},
{
    id: 20,
    nama: "Nasi Goreng Vegetarian",
    kategori: "Nasi Goreng Biasa",
    deskripsi: "Tanpa daging, dengan aneka sayuran.",
    harga: 14000,
    isAndalan: false,
    imagePath: nasgorVegetarianImg,
},
{
    id: 21,
    nama: "Nasi Goreng Jawa",
    kategori: "Nasi Goreng Biasa",
    deskripsi: "Bumbu lebih manis dan kental khas Jawa.",
    harga: 18000,
    isAndalan: false,
    imagePath: nasgorJawaImg,
},
{
    id: 22,
    nama: "Nasi Goreng Jawa Spesial",
    kategori: "Nasi Goreng Biasa",
    deskripsi: "Nasi goreng Jawa dengan isian lengkap.",
    harga: 20000,
    isAndalan: false,
    imagePath: nasgorJawaSpesialImg,
},

// --- Kategori Aneka Mie ---
{
    id: 23,
    nama: "Mie Goreng Biasa",
    kategori: "Aneka Rasa Mie",
    deskripsi: "Mie yang digoreng standar.",
    harga: 13000,
    isAndalan: false,
    imagePath: mieGorengImg,
},
{
    id: 24,
    nama: "Mie Rebus Biasa",
    kategori: "Aneka Rasa Mie",
    deskripsi: "Mie kuah dengan kaldu sederhana.",
    harga: 13000,
    isAndalan: false,
    imagePath: mieRebusImg,
},
{
    id: 25,
    nama: "Mie Goreng Campur",
    kategori: "Aneka Rasa Mie",
    deskripsi: "(Ayam, Hati) - Mie goreng dengan isian ayam dan hati.",
    harga: 15000,
    isAndalan: false,
    imagePath: mieCampurImg,
},

// --- Kategori Kwetiau ---
{
    id: 26,
    nama: "Kwetiau Goreng",
    kategori: "Aneka Rasa Kwetiau",
    deskripsi: "Kwetiau yang digoreng standar.",
    harga: 13000,
    isAndalan: false,
    imagePath: kwetiauGorengImg,
},
{
    id: 27,
    nama: "Kwetiau Rebus",
    kategori: "Aneka Rasa Kwetiau",
    deskripsi: "Kwetiau kuah dengan kaldu sederhana.",
    harga: 13000,
    isAndalan: false,
    imagePath: kwetiauRebusImg,
},
{
    id: 28,
    nama: "Kwetiau Campur",
    kategori: "Aneka Rasa Kwetiau",
    deskripsi: "(Ayam, Hati) - Kwetiau goreng dengan isian ayam dan hati.",
    harga: 15000,
    isAndalan: false,
    imagePath: kwetiauCampurImg,
},

// --- Kategori Bihun ---
{
    id: 29,
    nama: "Bihun Goreng",
    kategori: "Aneka Rasa Bihun",
    deskripsi: "Bihun yang digoreng standar.",
    harga: 13000,
    isAndalan: false,
    imagePath: bihunGorengImg,
},
{
    id: 30,
    nama: "Bihun Rebus",
    kategori: "Aneka Rasa Bihun",
    deskripsi: "Bihun kuah dengan kaldu sederhana.",
    harga: 13000,
    isAndalan: false,
    imagePath: bihunRebusImg,
},
{
    id: 31,
    nama: "Bihun Campur",
    kategori: "Aneka Rasa Bihun",
    deskripsi: "(Ayam, Hati) - Bihun goreng dengan isian ayam dan hati.",
    harga: 15000,
    isAndalan: false,
    imagePath: bihunCampurImg,
},

// --- Kategori Capcay ---
{
    id: 32,
    nama: "Capcay Goreng/Rebus",
    kategori: "Aneka Rasa Capcay",
    deskripsi: "Pilih Capcay Goreng tanpa kuah atau Rebus dengan kuah kental.",
    harga: 15000,
    isAndalan: false,
    imagePath: capcayGorengImg,
},
{
    id: 33,
    nama: "Capcay Goreng Seafood",
    kategori: "Aneka Rasa Capcay",
    deskripsi: "Capcay dengan udang dan cumi segar.",
    harga: 20000,
    isAndalan: false,
    imagePath: capcaySeafoodImg,
},
{
    id: 34,
    nama: "Capcay Goreng Ayam",
    kategori: "Aneka Rasa Capcay",
    deskripsi: "Capcay dengan potongan ayam.",
    harga: 15000,
    isAndalan: false,
    imagePath: capcayAyamImg,
},
{
    id: 35,
    nama: "Capcay Goreng Telur",
    kategori: "Aneka Rasa Capcay",
    deskripsi: "Capcay dengan telur.",
    harga: 15000,
    isAndalan: false,
    imagePath: capcayTelurImg,
},
{
    id: 36,
    nama: "Capcay Goreng Ati",
    kategori: "Aneka Rasa Capcay",
    deskripsi: "Capcay dengan hati ayam.",
    harga: 15000,
    isAndalan: false,
    imagePath: capcayAtiImg,
  },
];
