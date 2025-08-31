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
    <main className="flex-1 bg-gradient-to-r from-[#F7F7FC] to-[#F0F0FA] p-8">
            <h1 className="text-3xl font-bold mb-10">Arsitektur Aplikasi</h1>

            {/* Gambar Arsitektur */}
            <div className="flex justify-center mb-12">
                <Image
                    src={arsitekturImg}
                    alt="Arsitektur Notes App"
                    className="rounded-2xl shadow-lg max-h-[560px] w-auto object-contain"
                    priority
                />
            </div>

            {/* Penjelasan tiap layer */}
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
