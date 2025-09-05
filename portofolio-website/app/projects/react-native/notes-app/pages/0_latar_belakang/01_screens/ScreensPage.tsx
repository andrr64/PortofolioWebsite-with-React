'use client';

import Image from 'next/image';

// Import assets
import homeScreen from '@/public/notes_app/notesapp_homescreen.jpg';
import detailNote from '@/public/notes_app/notesapp_detail_note.jpg';
import aboutScreen from '@/public/notes_app/notesapp_aboutscreen.jpg';
import modalTambah from '@/public/notes_app/notesapp_modal_tambah_notes.jpg';
import noteCard from '@/public/notes_app/notesapp_note_card_component.jpg';
import tabNav from '@/public/notes_app/notesapp_tab_navigation.jpg';

export default function ScreensPage() {
    const screens = [
        {
            id: 1,
            title: 'Home Screen',
            type: 'Screen',
            image: homeScreen,
            desc: 'Halaman utama yang menampilkan daftar catatan. Dari sini user bisa melihat semua notes yang sudah dibuat.',
        },
        {
            id: 2,
            title: 'Detail Note',
            type: 'Screen',
            image: detailNote,
            desc: 'Menampilkan isi detail dari sebuah note. User bisa membaca penuh catatan tertentu.',
        },
        {
            id: 3,
            title: 'About Screen',
            type: 'Screen',
            image: aboutScreen,
            desc: 'Halaman tentang aplikasi. Berisi informasi pengembang dan tujuan pembuatan aplikasi Notes App.',
        },
        {
            id: 4,
            title: 'Modal Tambah Notes',
            type: 'Modal',
            image: modalTambah,
            desc: 'Komponen modal untuk menambahkan catatan baru. User bisa memasukkan judul dan isi note di sini.',
        },
        {
            id: 5,
            title: 'Note Card Component',
            type: 'Komponen',
            image: noteCard,
            desc: 'Komponen kartu untuk menampilkan note secara ringkas di Home Screen.',
        },
        {
            id: 6,
            title: 'Tab Navigation',
            type: 'Komponen',
            image: tabNav,
            desc: 'Navigasi tab untuk berpindah antar halaman (Home, About, dll).',
        },
    ];

    return (
        <main className="flex-1 bg-gradient-to-r from-[#F7F7FC] to-[#F0F0FA] dark:from-gray-900 dark:to-gray-800 p-8 transition-colors duration-300">
            <h1 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
                Daftar Screens & Komponen
            </h1>

            <div className="flex flex-wrap gap-8">
                {screens.map((item) => (
                    <div
                        key={item.id}
                        className="flex-1 min-w-[320px] max-w-[500px] 
                        bg-white dark:bg-gray-800 
                        border border-gray-200 dark:border-gray-700 
                        shadow-md rounded-2xl overflow-hidden 
                        hover:shadow-lg transition"
                    >
                        <div className="p-5 space-y-3">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {item.title}
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">Tipe:</span> {item.type}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 text-base">
                                <span className="font-semibold">Penjelasan:</span> {item.desc}
                            </p>
                        </div>
                        <Image
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto max-h-[560px] object-contain border-t border-gray-200 dark:border-gray-700"
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}
