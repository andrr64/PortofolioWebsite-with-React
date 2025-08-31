'use client';

import React, { useState } from 'react';
import { dbjs_code } from './codes/db';
import { model_note_code } from './codes/model_note';

interface DatabaseTab {
    id: 'dbjs' | 'modelNote';
    title: string;
    filePath: string;
    code: string;
    description: string[];
}

export default function CodingDatabasePage() {
    const tabs: DatabaseTab[] = [
        {
            id: 'dbjs',
            title: 'db.js',
            filePath: 'src/database/db.js',
            code: dbjs_code,
            description: [
                'Mengatur koneksi ke SQLite database.',
                'Mendefinisikan nama tabel notes.',
                'Membuat tabel jika belum ada (CREATE TABLE).',
                'Menyediakan fungsi initDB() untuk inisialisasi database.',
                'Fungsi getDB() untuk mendapatkan instance database.',
            ],
        },
        {
            id: 'modelNote',
            title: 'note.js',
            filePath: 'src/database/models/note.js',
            code: model_note_code,
            description: [
                'Fungsi tambahCatatan() -> menambahkan catatan baru ke tabel notes.',
                'Fungsi semuaCatatan() -> mengambil semua catatan dari tabel notes, urut dari terbaru.',
                'Fungsi updateCatatan() -> mengupdate catatan berdasarkan ID.',
                'Fungsi hapusCatatan() -> menghapus catatan berdasarkan ID.',
                'Semua fungsi menggunakan instance database dari db.js, tidak langsung mengakses database.',
            ],
        },
    ];

    const [activeTab, setActiveTab] = useState<'dbjs' | 'modelNote'>('dbjs');
    const currentTab = tabs.find(tab => tab.id === activeTab)!;

    // cegah copy
    const handleCopy = (e: React.ClipboardEvent<HTMLPreElement>) => {
        e.preventDefault();
        alert('Copy code tidak diperbolehkan!');
    };

    return (
        <main className="p-6 bg-gray-100 w-full min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Coding Database</h1>

            {/* Tab Navigation */}
            <div className="flex gap-4 mb-6 border-b">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`py-2 px-4 font-medium ${activeTab === tab.id
                            ? 'border-b-2 border-purple-600 text-purple-600'
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

            {/* Description */}
            <ul className="list-disc list-inside text-gray-700 mb-4">
                {currentTab.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                ))}
            </ul>

            {/* Code */}
            <pre className="bg-gray-900 text-green-400 p-4 rounded-xl shadow-md overflow-x-auto ">
                {currentTab.code}
            </pre>
        </main>
    );
}
