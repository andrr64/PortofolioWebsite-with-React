'use client';

import React from 'react';

const link_template_proyek = `https://drive.google.com/file/d/11pVD3Ydz1nAAqkBPgySmN8sRq5IRhOTs/view?usp=sharing`;

export default function PersiapanPage() {
    return (
        <main
            className="flex-1 bg-gradient-to-r from-[#F7F7FC] to-[#F0F0FA] 
                       dark:from-gray-900 dark:to-gray-800 p-8 
                       text-gray-900 dark:text-gray-100"
        >
            {/* Judul Halaman */}
            <h1 className="text-3xl font-bold mb-6">
                Persiapan Proyek
            </h1>

            {/* Paragraf pembuka */}
            <p className="mb-6">
                Sebelum mulai coding, ikuti langkah-langkah berikut untuk
                menyiapkan <span className="font-semibold">project template</span>:
            </p>

            {/* Daftar langkah */}
            <ol className="list-decimal pl-6 space-y-4">
                <li>
                    Download template proyek di sini:{' '}
                    <a
                        href={link_template_proyek}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 underline font-medium"
                    >
                        Download Template
                    </a>
                </li>

                <li>
                    Extract file hasil download, lalu buka terminal dan masuk ke folder
                    project.
                </li>

                <li>
                    Jalankan perintah berikut di terminal untuk menginstall semua
                    dependensi:
                    <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mt-2 text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                        npm i
                    </pre>
                </li>

                <li>
                    Template ini sudah termasuk <span className="font-semibold">CSS bawaan</span>,
                    jadi kamu bisa langsung fokus ke pembuatan komponen tanpa perlu
                    setup styling dari awal.
                </li>
            </ol>

            {/* Penutup */}
            <p className="mt-8 text-green-600 dark:text-green-400 font-semibold">
                ✅ Semua langkah selesai! Kamu sudah siap untuk mulai coding 🚀
            </p>
        </main>
    );
}
