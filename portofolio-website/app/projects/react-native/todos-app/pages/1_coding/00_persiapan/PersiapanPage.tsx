import React from 'react'

const link_template_proyek = `https://drive.google.com/file/d/1V9Qr85x1dTW-oQExoKZcNNHDwxMiel2V/view?usp=sharing`

export default function PersiapanPage() {
    return (
        <div className="p-6 space-y-4 text-gray-800">
            <h1 className="text-2xl font-bold">Persiapan Proyek</h1>

            <p>
                Sebelum mulai coding, silakan ikuti langkah-langkah berikut untuk
                menyiapkan project template:
            </p>

            <ol className="list-decimal pl-6 space-y-2">
                <li>
                    Download template proyek di sini:{' '}
                    <a
                        href={link_template_proyek}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
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
                    <pre className="bg-gray-100 p-2 rounded mt-1 text-sm">
                        npm i
                    </pre>
                </li>
                <li>
                    Template ini sudah termasuk <b>CSS bawaan</b>, jadi kamu bisa langsung
                    fokus ke pembuatan komponen tanpa perlu setup styling dari awal.
                </li>
            </ol>

            <p className="mt-4 text-green-600 font-semibold">
                ✅ Setelah semua langkah di atas selesai, kamu sudah siap untuk mulai coding!
            </p>
        </div>
    )
}
