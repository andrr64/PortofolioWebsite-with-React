'use client';

import React, { useState } from 'react';
import { tabNavigator_code } from './codes/tab_navigator';
import { stack_navigatorTs } from './codes/stack_navigator';
import gambarTab from '@/public/notes_app/notesapp_tab_navigation.jpg';
import Image from 'next/image';

interface Tab {
  id: 'tab' | 'stack';
  title: string;
  filePath: string;
  code: string;
  description: string[];
  image?: any; // tambahkan optional image
}

export default function CodingNavigator() {
  const tabs: Tab[] = [
    {
      id: 'tab',
      title: 'TabNavigator',
      filePath: 'src/TabNavigator/index.tsx',
      code: tabNavigator_code,
      description: [
        'Membuat navigator bottom tab menggunakan createBottomTabNavigator.',
        'Setiap tab punya label, icon, dan component yang ditampilkan.',
        'Tab: Home -> Homescreen, About -> AboutScreen.',
        'Atur warna aktif/inaktif, style tabBar, dan header style.',
      ],
      image: gambarTab, // tambahkan gambar
    },
    {
      id: 'stack',
      title: 'StackNavigator',
      filePath: 'src/StackNavigator/index.tsx',
      code: stack_navigatorTs,
      description: [
        'Bungkus TabNavigator dan DetailNoteScreen dengan stack navigator.',
        'Atur initialRouteName = "home".',
        'Hide header untuk kedua screen.',
        'Gunakan NavigationContainer sebagai root navigator.',
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState<'tab' | 'stack'>('tab');
  const currentTab = tabs.find(tab => tab.id === activeTab)!;

  const handleCopy = (e: React.ClipboardEvent<HTMLPreElement>) => {
    e.preventDefault();
    alert('Copy code tidak diperbolehkan!');
  };

  return (
    <div className="p-6 bg-gray-100 w-full min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Coding Navigator</h1>

      {/* Tab Navigation */}
      <div className="flex space-x-4 border-b">
        {tabs.map(tab => (
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
      <div className="text-xs p-5 text-gray-500 font-mono">
        File: {currentTab.filePath}
      </div>
      
      {/* Image Preview (hanya untuk TabNavigator) */}
      {currentTab.image && (
        <div className="mb-4">
          <Image src={currentTab.image} alt={'Tabnavigator '} />
        </div>
      )}

      {/* Description */}
      <ul className="list-disc list-inside text-gray-700 mb-4">
        {currentTab.description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>


      {/* Code Display */}
      <pre
        className="bg-gray-900 text-green-400 p-4 rounded-xl shadow-md overflow-x-auto"
        onCopy={handleCopy}
      >
        {currentTab.code}
      </pre>
    </div>
  );
}