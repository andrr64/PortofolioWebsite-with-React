'use client';

import React, { useState } from 'react';
import { notecard_code } from '../02_coding_komponen/codes/notes';
import { add_note_modal_code } from './codes/add_note_modal';
import noteCard from '@/public/notes_app/notesapp_note_card_component.jpg';
import modalImage from '@/public/notes_app/notesapp_modal_tambah_notes.jpg'
import Image from 'next/image';

interface ComponentTab {
    id: 'notecard' | 'modal';
    title: string;
    filePath: string;
    code: string;
    description: string[];
    image?: any; // optional
    height?: number;
}

export default function CodingComponentPage() {
    const tabs: ComponentTab[] = [
        {
            id: 'notecard',
            title: 'NoteCard',
            filePath: 'src/components/NoteCard.js',
            code: notecard_code,
            description: [
                'Komponen React Native untuk menampilkan satu catatan dalam bentuk kartu.',
                'Menggunakan <TouchableOpacity> agar kartu bisa diklik/disentuh.',
                'Menerima properti (props) `note` dan `navigator`.',
                'Menampilkan tanggal, judul, dan ringkasan isi catatan (maksimal 3 baris).',
                'Saat disentuh, memanggil fungsi `pindahKeHalamanDetail`.',
                'Fungsi ini akan menavigasikan pengguna ke halaman "detail" dengan membawa data catatan yang dipilih.',
            ],
            image: noteCard,
        },
        {
            id: 'modal',
            title: 'AddNoteModal',
            filePath: 'src/modal/AddNoteModal.js',
            code: add_note_modal_code,
            description: [
                'Komponen modal untuk menambah catatan baru.',
                'Ada dua input: Judul dan Catatan.',
                'Tombol "Simpan" akan menyimpan catatan ke database jika input tidak kosong.',
                'Tombol "Batal" menutup modal dan membersihkan input.',
                'KeyboardAvoidingView digunakan agar keyboard tidak menutupi input saat mengetik.',
            ],
            image: modalImage,
            height: 480
        },
    ];

    const [activeTab, setActiveTab] = useState<'notecard' | 'modal'>('notecard');

    const currentTab = tabs.find((tab) => tab.id === activeTab)!;

    return (
        <main className="p-6 bg-gray-100 w-full min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Coding Komponen</h1>

            {/* Tab Navigation */}
            <div className="flex gap-4 mb-6 border-b">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`py-2 px-4 font-medium ${activeTab === tab.id
                            ? 'border-b-2 border-blue-600 text-blue-600'
                            : 'text-gray-600'
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* File Path */}
            <div className="text-xs text-gray-500 font-mono mb-4">
                File: {currentTab.filePath}
            </div>

            {/* Image */}
            {currentTab.image && (
                <div className="mb-4">
                    <Image
                        src={currentTab.image}
                        alt={currentTab.title}
                        height={currentTab.height ?? 256} // pakai height dari tab, default 256
                        className="rounded-xl shadow-md"
                    />
                </div>
            )}


            {/* Description */}
            <ul className="list-disc list-inside text-gray-700 mb-4">
                {currentTab.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                ))}
            </ul>

            {/* Code */}

            <pre className="bg-gray-900 text-green-400 p-4 rounded-xl shadow-md overflow-x-auto ">
                <code>{currentTab.code}</code>
            </pre>
        </main>
    );
}
