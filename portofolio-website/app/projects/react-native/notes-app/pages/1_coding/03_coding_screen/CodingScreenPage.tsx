'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { homescreen_code } from './codes/homescreen';
import { about_screen_code } from './codes/aboutscreen';
import { detail_note_screen } from './codes/detailnotescreen';
import gambarHomescreen from '@/public/notes_app/notesapp_homescreen.jpg';
import gambarAboutApp from '@/public/notes_app/notesapp_aboutscreen.jpg';
import gambarDetailNote from '@/public/notes_app/notesapp_detail_note.jpg';

interface Tab {
  id: 'homescreen' | 'about' | 'detail';
  title: string;
  filePath: string;
  code: string;
  image?: any;
  description: string[];
}

export default function CodingScreenPage() {
  const tabs: Tab[] = [
    {
      id: 'homescreen',
      title: 'Homescreen',
      filePath: 'src/screens/Homescreen.js',
      code: homescreen_code,
      image: gambarHomescreen,
      description: [
        'useState digunakan untuk menyimpan data yang bisa berubah, contohnya notes dan status modal.',
        'useCallback + useFocusEffect dipakai supaya data catatan selalu diperbarui saat halaman muncul.',
        'SafeAreaView membuat layout aman di layar dengan notch atau status bar.',
        'ScrollView untuk menampilkan daftar catatan agar bisa digulir.',
        'TouchableOpacity untuk tombol FAB "+" agar bisa ditekan.',
        'Fungsi openAddNoteModal dan closeAddNoteModal untuk membuka/tutup modal tambah catatan.',
        'Jika tidak ada catatan, tampilkan icon dan teks "Belum Ada Catatan".',
      ],
    },
    {
      id: 'about',
      title: 'Aboutscreen',
      filePath: 'src/screens/Aboutscreen.js',
      code: about_screen_code,
      image: gambarAboutApp,
      description: [
        'Halaman tentang aplikasi dan pengembang.',
        'Header menampilkan judul halaman.',
        'ProfileSection menampilkan foto, nama, dan deskripsi pengembang.',
        'SafeAreaView memastikan konten tidak tertutup status bar.',
      ],
    },
    {
      id: 'detail',
      title: 'DetailNote',
      filePath: 'src/screens/DetailNoteScreen.js',
      code: detail_note_screen,
      image: gambarDetailNote,
      description: [
        'Halaman untuk melihat dan mengedit catatan yang sudah dibuat.',
        'useState digunakan untuk status edit, judul, dan isi catatan.',
        'TextInput digunakan saat catatan sedang diedit.',
        'Fungsi handleDelete untuk menghapus catatan dengan konfirmasi Alert.',
        'Fungsi handleUpdate untuk menyimpan perubahan catatan.',
        'SafeAreaView dan useSafeAreaInsets agar layout aman dari notch atau bottom bar.',
        'ScrollView agar catatan panjang bisa digulir.',
        'Tombol Edit, Update, dan Hapus berada di bagian bawah layar.',
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState<'homescreen' | 'about' | 'detail'>('homescreen');
  const currentTab = tabs.find(tab => tab.id === activeTab)!;

  // cegah copy kode
  const handleCopy = (e: React.ClipboardEvent<HTMLPreElement>) => {
    e.preventDefault();
    alert('Copy code tidak diperbolehkan!');
  };

  return (
    <div className="p-6 bg-gray-100 w-full min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Coding Layar/Screen</h1>

      {/* Tab Navigation */}
      <div className="flex space-x-4 border-b">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`py-2 px-4 font-medium ${activeTab === tab.id ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
              }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* File Path */}
      <div className="text-xs py-5 text-gray-500 font-mono">
        File: {currentTab.filePath}
      </div>

      {/* Gambar */}
      {currentTab.image && (
        <div className="mb-4">
          <Image
            src={currentTab.image}
            alt={currentTab.title}
            style={{ maxHeight: '520px', width: '100%', objectFit: 'contain' }}
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

      {/* Code Display */}
      <pre className="bg-gray-900 text-green-400 p-4 rounded-xl shadow-md overflow-x-auto ">
        {currentTab.code}
      </pre>
    </div>
  );
}
