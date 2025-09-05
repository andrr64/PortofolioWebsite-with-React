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
  image?: any; // optional
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
      image: gambarTab,
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
    <div className="p-6 w-full min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      {/* Judul */}
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Coding Navigator
      </h1>

      {/* Tab Navigation */}
      <div className="flex space-x-4 border-b border-gray-300 dark:border-gray-700">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`py-2 px-4 font-medium transition-colors ${
              activeTab === tab.id
                ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* File Path */}
      <div className="text-xs py-5 text-gray-500 dark:text-gray-400 font-mono">
        File: {currentTab.filePath}
      </div>
      
      {/* Image Preview */}
      {currentTab.image && (
        <div className="mb-4">
          <Image
            src={currentTab.image}
            alt={currentTab.title}
            style={{ maxHeight: '480px', width: '100%', objectFit: 'contain' }}
            className="rounded-xl shadow-md"
          />
        </div>
      )}

      {/* Description */}
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
        {currentTab.description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>

      {/* Code Display */}
      <pre
        onCopy={handleCopy}
        className="bg-gray-900 dark:bg-gray-800 text-green-400 p-4 rounded-xl shadow-md overflow-x-auto"
      >
        {currentTab.code}
      </pre>
    </div>
  );
}
