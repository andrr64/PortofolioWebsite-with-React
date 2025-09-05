'use client';

import React from 'react';
import Image from 'next/image';
import aboutScreenCompleted from '@/public/notes_app/notesapp_aboutscreen_completed.jpg';

export default function KuisPage() {
  return (
    <main className="p-6 bg-gray-100 dark:bg-gray-900 w-full min-h-screen transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Kuis
      </h1>

      {/* Step Instruction */}
      <div className="space-y-6">
        {/* Step 1 */}
        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            1. Buka AboutScreen
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-1">
            Siswa diminta membuka halaman <b>AboutScreen</b> di project React Native kalian.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Ubah <b>foto profil</b>, <b>nama</b>, dan <b>deskripsi</b>.
          </p>
        </section>

        {/* Step 2 */}
        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            2. Lihat Contoh Hasil
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Berikut contoh AboutScreen yang sudah selesai:
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src={aboutScreenCompleted}
              alt="Contoh AboutScreen"
              width={300}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Step 3 */}
        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            3. Submit
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Jika sudah selesai, kompres proyek menjadi file .zip lalu upload.
          </p>
          <div className="flex justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeoUTnm2FY9hOmRb6R-t9C_I4e0hueuDiLkMxq2l5raQSf54g/viewform?usp=sharing&ouid=109943255166589529065"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
            >
              Klik Disini
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
