'use client';

import React from "react";

const NotFoundPage = () => {
  return (
    <div className="bg-white text-black flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-5xl font-semibold mb-4">404</h1>
      <h2 className="text-xl font-semibold mb-2">Halaman Tidak Ditemukan</h2>
      <p className="text-center text-gray-600 max-w-md mb-8 text-sm leading-relaxed">
        Maaf, halaman yang kamu cari tidak ada di website ini. Tapi jangan khawatir,
        masih banyak konten menarik lainnya untuk dijelajahi!
      </p>
      <div className="flex space-x-3 mb-8">
        <button
          onClick={() => window.location.href = "mailto:andrrbussines15@gmail.com"}
          className="bg-gray-200 text-black text-sm rounded px-4 py-2 hover:bg-gray-300 transition"
          type="button"
        >
          Laporkan Masalah
        </button>
      </div>
      <p className="text-xs text-center max-w-xs">
        <span className="font-semibold">Butuh bantuan?</span> Hubungi saya di{" "}
        <a
          className="underline hover:text-gray-700"
          href="mailto:andrrbussines15@gmail.com"
        >
          andrrbussines15@gmail.com
        </a>
      </p>
    </div>
  );
};

export default NotFoundPage;
