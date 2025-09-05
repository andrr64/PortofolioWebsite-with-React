'use client';

import Image from 'next/image';

// Import asset gambar arsitektur
import arsitekturImg from '@/public/arsitektur.png';

export default function ArsitekturPage() {
    const items = [
        {
            id: 1,
            title: 'Screens',
            type: 'Layer UI',
            desc: 'Berisi halaman utama aplikasi (HomeScreen, DetailNoteScreen, AboutScreen). Di dalamnya ada Modal (AddNoteModal) dan Komponen (NoteCard). Semua interaksi user dimulai dari sini.',
        },
        {
            id: 2,
            title: 'Models',
            type: 'Layer Data/Logic',
            desc: 'Menghubungkan UI dengan database. File models/note.js berisi fungsi CRUD (Create, Read, Update, Delete). Semua request data dari Screens akan lewat sini, bukan langsung ke DB.',
        },
        {
            id: 3,
            title: 'Database',
            type: 'Layer Storage',
            desc: 'Lapisan penyimpanan (SQLite via db.js). Models akan melakukan query SQL ke database untuk menyimpan, membaca, mengupdate, atau menghapus data catatan.',
        },
    ];

    return (
        <main className="flex-1 min-h-screen bg-gradient-to-r from-[#F7F7FC] to-[#F0F0FA] dark:from-gray-900 dark:to-gray-950 p-8 transition-colors duration-300">
            <h1 className="text-3xl font-bold mb-10 text-gray-800 dark:text-gray-100">
                Arsitektur Aplikasi
            </h1>

            {/* Gambar Arsitektur */}
            <div className="flex justify-center mb-12">
                <Image
                    src={arsitekturImg}
                    alt="Diagram arsitektur aplikasi Notes App"
                    className="rounded-2xl shadow-lg max-h-[560px] w-auto object-contain"
                    priority
                />
            </div>

            {/* Penjelasan tiap layer */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-2xl hover:shadow-lg transition overflow-hidden"
                    >
                        <div className="p-6 space-y-3">
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                                {item.title}
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                <span className="font-semibold">Tipe:</span> {item.type}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                                <span className="font-semibold">Penjelasan:</span> {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
