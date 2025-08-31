'use client';

import React from 'react';
import Image from 'next/image';
import aboutScreenCompleted from '@/public/notes_app/notesapp_aboutscreen_completed.jpg';

export default function KuisPage() {
  return (
    <main className="p-6 bg-gray-100 w-full min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Kuis</h1>

      {/* Step Instruction */}
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Buka AboutScreen</h2>
          <p className="text-gray-700 mb-1">
            Siswa diminta membuka halaman <b>AboutScreen</b> di project React Native kalian.
          </p>
          <p className="text-gray-700">
            Ubah <b>foto profil</b>, <b>nama</b>, dan <b>deskripsi</b>. 
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Lihat Contoh Hasil</h2>
          <p className="text-gray-700 mb-2">
            Berikut contoh AboutScreen yang sudah selesai:
          </p>
          <div className="flex justify-center mb-4">
            <Image
              src={aboutScreenCompleted}
              alt="Contoh AboutScreen"
              width={300}
              height={500}
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Submit</h2>
          <p className="text-gray-700 mb-2">
            Jika sudah selesai, kompres proyek menjadi file .zip lalu upload.
          </p>
          <div className="flex justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeoUTnm2FY9hOmRb6R-t9C_I4e0hueuDiLkMxq2l5raQSf54g/viewform?usp=sharing&ouid=109943255166589529065" // ganti dengan link form sebenarnya
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Klik Disini
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
