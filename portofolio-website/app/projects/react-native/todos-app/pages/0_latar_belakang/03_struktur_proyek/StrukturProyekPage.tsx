'use client';

import Image from 'next/image';
import gambarStrukturProyek from '@/public/struktur_pryek.png'

export default function StrukturPage() {
    const items = [
        {
            id: 1,
            title: 'StackNavigator.js & TabNavigator.js',
            type: 'Navigasi',
            desc: 'File ini berisi konfigurasi navigasi aplikasi. StackNavigator mengatur navigasi berbasis stack (halaman bisa didorong & ditarik kembali), sedangkan TabNavigator mengatur navigasi dengan tab di bagian bawah aplikasi.',
        },
        {
            id: 2,
            title: 'components/',
            type: 'Folder Komponen',
            desc: 'Berisi komponen UI yang dapat dipakai ulang di berbagai screen. Contoh: NoteCard.js adalah komponen untuk menampilkan catatan dalam bentuk kartu di HomeScreen.',
        },
        {
            id: 3,
            title: 'database/',
            type: 'Folder Database',
            desc: 'Menyimpan konfigurasi database SQLite. File db.js berfungsi sebagai koneksi utama database, sedangkan di dalamnya ada folder models untuk pengelolaan data.',
        },
        {
            id: 4,
            title: 'database/models/',
            type: 'Folder Model',
            desc: 'Berisi model data aplikasi. note.js mengatur struktur dan fungsi CRUD (Create, Read, Update, Delete) untuk catatan agar mudah diakses dari UI.',
        },
        {
            id: 5,
            title: 'modals/',
            type: 'Folder Modal',
            desc: 'Berisi komponen modal seperti AddNoteModal.js yang digunakan untuk menambahkan catatan baru. Modal ini biasanya dipanggil dari HomeScreen.',
        },
        {
            id: 6,
            title: 'screens/',
            type: 'Folder Screens',
            desc: 'Menyimpan halaman utama aplikasi. Terdiri dari Homescreen.js (daftar catatan), DetailNoteScreen.js (detail catatan), dan Aboutscreen.js (tentang aplikasi).',
        },
    ];

    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold mb-10">Struktur Proyek</h1>
            <p className="text-gray-700 mb-12 max-w-3xl">
                Berikut adalah struktur folder dan file pada proyek <span className="font-semibold">Notes App</span>.
                Setiap folder memiliki fungsi khusus agar kode lebih terorganisir dan mudah dipelihara.
            </p>

            {/* Tambah Gambar Struktur Proyek */}
            <div className="flex justify-center mb-12">
                <Image
                    src={gambarStrukturProyek}
                    alt="Struktur Proyek Notes App"
                    className="rounded-2xl shadow-lg max-h-[560px] w-auto object-contain"
                    priority
                />
            </div>

            <div className="flex flex-wrap gap-8">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex-1 min-w-[320px] max-w-[500px] bg-gray-50 border border-gray-200 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
                    >
                        <div className="p-5 space-y-3">
                            <h2 className="text-xl font-semibold">{item.title}</h2>
                            <p className="text-sm text-gray-500">
                                <span className="font-semibold">Tipe:</span> {item.type}
                            </p>
                            <p className="text-gray-700 text-base">
                                <span className="font-semibold">Penjelasan:</span> {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
