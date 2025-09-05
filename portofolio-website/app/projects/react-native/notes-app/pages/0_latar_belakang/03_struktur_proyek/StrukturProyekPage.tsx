'use client';

import Image from 'next/image';
import gambarStrukturProyek from '@/public/struktur_pryek.png';

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
        <main className="flex-1 min-h-screen bg-gradient-to-r from-[#F7F7FC] to-[#F0F0FA] dark:from-gray-900 dark:to-gray-950 p-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                    Struktur Proyek
                </h1>
                <p className="text-gray-700 dark:text-gray-300 mb-12 max-w-3xl leading-relaxed">
                    Berikut adalah struktur folder dan file pada proyek{' '}
                    <span className="font-semibold">Notes App</span>. Setiap folder memiliki fungsi khusus agar kode
                    lebih terorganisir dan mudah dipelihara.
                </p>

                {/* Gambar Struktur Proyek */}
                <div className="flex justify-center mb-12">
                    <Image
                        src={gambarStrukturProyek}
                        alt="Struktur Proyek Notes App"
                        className="rounded-2xl shadow-lg max-h-[560px] w-auto object-contain"
                        priority
                    />
                </div>

                {/* Daftar item struktur */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-2xl hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300 overflow-hidden"
                        >
                            <div className="p-6 space-y-3">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {item.title}
                                </h2>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    <span className="font-semibold">Tipe:</span> {item.type}
                                </p>
                                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <span className="font-semibold">Penjelasan:</span> {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
