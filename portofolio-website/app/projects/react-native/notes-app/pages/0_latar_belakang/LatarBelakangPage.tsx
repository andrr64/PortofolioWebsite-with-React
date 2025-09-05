"use client";

import React from "react";

const LatarBelakangPage: React.FC = () => {
  return (
    <main className="flex-1 bg-gradient-to-r from-[#F7F7FC] to-[#F0F0FA] dark:from-gray-900 dark:to-gray-800 p-8 transition-colors duration-300">
      <div className="max-w-6xl space-y-8">

        {/* Judul */}
        <header className="text-left">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Latar Belakang
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">
            Mengapa kita membangun aplikasi <i>Notes App</i> dengan React Native + Expo?
          </p>
        </header>

        {/* Konten */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-6 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Mengapa Memilih Notes App?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Dalam mempelajari pengembangan aplikasi mobile, kita membutuhkan contoh
            proyek yang sederhana namun tetap bermanfaat. Aplikasi <b>Notes</b>
            dipilih karena:
          </p>

          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Sangat sederhana untuk dipahami pemula.</li>
            <li>Memiliki fitur dasar yang bisa dikembangkan (tambah, edit, hapus catatan).</li>
            <li>Relevan dengan kehidupan sehari-hari, karena setiap orang butuh mencatat.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Manfaat Latihan
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Dengan membangun Notes App, kita bisa memahami beberapa konsep penting
            dalam React Native, antara lain:
          </p>

          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Pengenalan komponen dasar React Native.</li>
            <li>Pengelolaan state untuk menyimpan data catatan.</li>
            <li>Penggunaan Expo untuk mempermudah proses development.</li>
            <li>Penerapan gaya/tampilan agar aplikasi lebih menarik.</li>
            <li>
              Penerapan konsep <b>CRUD (Create, Read, Update, Delete)</b>
              menggunakan <b>expo-sqlite</b> untuk penyimpanan data lokal.
            </li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Dengan begitu, Notes App bukan hanya sekadar aplikasi sederhana,
            tapi juga latihan nyata untuk memahami dasar pengelolaan data
            menggunakan database lokal.
          </p>
        </section>

        {/* Ringkasan */}
        <section className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl border border-blue-200 dark:border-blue-700 transition-colors duration-300">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">
            Ringkasan
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
            <li>Notes App dipilih karena sederhana dan relevan.</li>
            <li>Proyek ini cocok untuk latihan dasar React Native + Expo.</li>
            <li>
              Kita akan belajar state, komponen, styling, serta <b>CRUD</b> dengan <b>expo-sqlite</b>.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default LatarBelakangPage;
