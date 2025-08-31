'use client';

import React, { useState } from 'react';
import { modalTambahKategori } from './codes/modal_tambah_kategori';
import { modalTambahTugas } from './codes/modal_tambah_tugas';
import { kodeTaskItem } from './codes/task_item';

import gambarModalKatgori from '@/public/todos_app/todos_modalkategoribaru.jpg';
import gambarModalTugas from '@/public/todos_app/todos_modaltugasbaru.jpg';
import gambarTaskItem from '@/public/todos_app/todos_taskitem.jpg';
import Image from 'next/image';

interface ComponentTab {
    id: 'kategori' | 'tugas' | 'taskitem';
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
            id: 'kategori',
            title: 'ModalTambahKategori',
            filePath: 'src/modals/TambahKategoriModal.js',
            code: modalTambahKategori,
            description: [
                'Komponen modal untuk menambah kategori baru.',
                'Mempunyai input teks untuk nama kategori.',
                'Terdapat pilihan warna kategori menggunakan tombol warna.',
                'Tombol "Simpan" akan menyimpan kategori baru ke database.',
                'Tombol "Batal" akan menutup modal tanpa menyimpan.',
            ],
            image: gambarModalKatgori,
            height: 420,
        },
        {
            id: 'tugas',
            title: 'ModalTambahTugas',
            filePath: 'src/modals/TambahTugasModal.js',
            code: modalTambahTugas,
            description: [
                'Komponen modal untuk menambah tugas baru.',
                'Memiliki input: Judul, Deskripsi, Kategori, Tanggal, Waktu Mulai, dan Waktu Selesai.',
                'Kategori ditampilkan dalam bentuk chip yang bisa dipilih.',
                'Tanggal & waktu dipilih menggunakan DateTimePicker.',
                'Tombol "Simpan" akan menyimpan tugas baru ke database.',
                'Tombol "Batal" menutup modal tanpa menyimpan.',
            ],
            image: gambarModalTugas,
            height: 520,
        },
        {
            id: 'taskitem',
            title: 'TaskItem',
            filePath: 'src/components/TaskItem.js',
            code: kodeTaskItem,
            description: [
                'Komponen untuk menampilkan satu tugas dalam daftar.',
                'Menampilkan checkbox, ikon kategori, judul tugas, serta subtitle berisi tanggal dan kategori.',
                'Jika tugas ditandai selesai, teks akan dicoret dan berubah warna abu-abu.',
                'Saat tugas ditekan, pengguna diarahkan ke halaman detail dengan membawa ID tugas.',
            ],
            image: gambarTaskItem,
            height: 180,
        },
    ];

    const [activeTab, setActiveTab] = useState<'kategori' | 'tugas' | 'taskitem'>('kategori');

    const currentTab = tabs.find((tab) => tab.id === activeTab)!;

    return (
        <main className="p-6 bg-gray-100 w-full min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Coding Komponen - Todos App</h1>

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
                        height={currentTab.height ?? 256}
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
            <pre className="bg-gray-900 text-green-400 p-4 rounded-xl shadow-md overflow-x-auto">
                <code>{currentTab.code}</code>
            </pre>
        </main>
    );
}
