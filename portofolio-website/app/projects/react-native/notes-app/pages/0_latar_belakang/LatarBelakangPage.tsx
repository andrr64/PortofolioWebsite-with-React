"use client";

import React from "react";

const LatarBelakangPage: React.FC = () => {
  // Konteks:
  // Materi bagian "Latar Belakang"
  // Tema: Pembuatan Notes App menggunakan React Native + Expo
  // Isi:
  // - Mengapa membuat Note App
  // - Alasan teknis dan manfaat sebagai latihan
  // - Notes App sebagai latihan CRUD dengan expo-sqlite

  return (
    <main className="flex-1 bg-gradient-to-r from-[#F7F7FC] to-[#F0F0FA] p-8">
      <div className="max-w-6xl space-y-8">
        
        {/* Judul */}
        <header className="text-left">
          <h1 className="text-4xl font-bold">Latar Belakang</h1>
          <p className="text-gray-600 mt-2 text-lg">
            Mengapa kita membangun aplikasi <i>Notes App</i> dengan React Native + Expo?
          </p>
        </header>

        {/* Konten */}
        <section className="bg-white p-6 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Mengapa Memilih Notes App?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Dalam mempelajari pengembangan aplikasi mobile, kita membutuhkan contoh
            proyek yang sederhana namun tetap bermanfaat. Aplikasi <b>Notes</b> 
            dipilih karena:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Sangat sederhana untuk dipahami pemula.</li>
            <li>Memiliki fitur dasar yang bisa dikembangkan (tambah, edit, hapus catatan).</li>
            <li>Relevan dengan kehidupan sehari-hari, karena setiap orang butuh mencatat.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">
            Manfaat Latihan
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Dengan membangun Notes App, kita bisa memahami beberapa konsep penting 
            dalam React Native, antara lain:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Pengenalan komponen dasar React Native.</li>
            <li>Pengelolaan state untuk menyimpan data catatan.</li>
            <li>Penggunaan Expo untuk mempermudah proses development.</li>
            <li>Penerapan gaya/tampilan agar aplikasi lebih menarik.</li>
            <li>
              Penerapan konsep <b>CRUD (Create, Read, Update, Delete)</b> 
              menggunakan <b>expo-sqlite</b> untuk penyimpanan data lokal.
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Dengan begitu, Notes App bukan hanya sekadar aplikasi sederhana,
            tapi juga latihan nyata untuk memahami dasar pengelolaan data 
            menggunakan database lokal.
          </p>
        </section>

        {/* Ringkasan */}
        <section className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800">Ringkasan</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Notes App dipilih karena sederhana dan relevan.</li>
            <li>Proyek ini cocok untuk latihan dasar React Native + Expo.</li>
            <li>Kita akan belajar state, komponen, styling, serta <b>CRUD</b> dengan <b>expo-sqlite</b>.</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default LatarBelakangPage;
