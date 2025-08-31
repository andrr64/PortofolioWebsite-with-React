"use client";

import React from "react";

const ReactBagianPage: React.FC = () => {
  return (
    <main className="flex-1 bg-gradient-to-r from-[#F7F7FC] to-[#F0F0FA] p-8">
      <div className="max-w-6xl space-y-8">
        
        {/* Judul */}
        <header className="text-left">
          <h1 className="text-4xl font-bold text-blue-700">React - Bagian 1</h1>
          <p className="text-gray-600 mt-2 text-lg">
            Pengenalan Dasar React untuk Pemula
          </p>
        </header>

        {/* Konten */}
        <section className="bg-white p-6 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Apa itu React?</h2>
          <p className="text-gray-700 leading-relaxed">
            React adalah library JavaScript yang digunakan untuk membangun antarmuka pengguna (UI). 
            React memudahkan kita membuat aplikasi web yang interaktif dan efisien.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg border font-mono text-sm text-gray-800">
            <p>// Contoh pertama React</p>
            <pre>{`function App() {
  return <h1>Hello, React!</h1>;
}`}</pre>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Di atas adalah contoh sederhana komponen React bernama <b>App</b>. 
            Komponen ini akan menampilkan tulisan <b>Hello, React!</b> ke layar.
          </p>
        </section>

        {/* Ringkasan */}
        <section className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800">Ringkasan</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>React adalah library JavaScript untuk membangun UI.</li>
            <li>Membantu membuat aplikasi interaktif lebih cepat & terstruktur.</li>
            <li>Konsep utama React adalah <b>komponen</b>.</li>
          </ul>
        </section>

        {/* Navigasi ke bagian lain */}
        <nav className="flex justify-between mt-10">
          <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium">
            ⬅ Sebelumnya
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium">
            Selanjutnya ➡
          </button>
        </nav>
      </div>
    </main>
  );
};

export default ReactBagianPage;
