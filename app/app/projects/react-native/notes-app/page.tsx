'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import LatarBelakangPage from './pages/0_latar_belakang/LatarBelakangPage';
import ScreensPage from './pages/0_latar_belakang/01_screens/ScreensPage';
import ArsitekturPage from './pages/0_latar_belakang/02_arsitektur/ArsitekturPage';
import CodingPage from './pages/1_coding/CodingPage';
import StrukturProyekPage from './pages/0_latar_belakang/03_struktur_proyek/StrukturProyekPage';
import CodingDatabasePage from './pages/1_coding/01_coding_database/CodingDatabasePage';
import CodingComponentPage from './pages/1_coding/02_coding_komponen/CodingComponentPage';
import PersiapanPage from './pages/1_coding/00_persiapan/PersiapanPage';
import CodingScreenPage from './pages/1_coding/03_coding_screen/CodingScreenPage';
import CodingNavigator from './pages/1_coding/04_coding_navigator/CodingNavigator';
import BuildApkPage from './pages/2_jalankan_aplikasi/BuildApkPage';
import KuisPage from './pages/3_kuis/KuisPage';

type MenuItem = {
  id: string;
  href?: string;
  icon?: string;
  label: string;
  component?: React.ReactNode;
  submenu?: MenuItem[];
};

const menuItems: MenuItem[] = [
  {
    id: 'menu1',
    icon: 'fas fa-layer-group',
    label: '1. Latar Belakang',
    component: <LatarBelakangPage />,
    submenu: [
      { id: 'submenu1-a', label: 'a. Tampilan Aplikasi', component: <ScreensPage /> },
      { id: 'submenu1-b', label: 'b. Arsitektur Aplikasi', component: <ArsitekturPage /> },
      { id: 'submenu1-c', label: 'c. Struktur Proyek', component: <StrukturProyekPage /> },
    ],
  },
  {
    id: 'menu2',
    icon: 'fas fa-cube',
    label: '2. Coding Aplikasi',
    component: <CodingPage />,
    submenu: [
      { id: 'submenu2-1', label: 'a. Kode Database', component: <CodingDatabasePage /> },
      { id: 'submenu2-2', label: 'b. Kode Komponen', component: <CodingComponentPage /> },
      { id: 'submenu2-3', label: 'c. Kode Screen', component: <CodingScreenPage /> },
      { id: 'submenu2-4', label: 'd. Kode Navigator', component: <CodingNavigator /> },
    ],
  },
  {
    id: 'menu3',
    icon: 'fas fa-cogs',
    label: '3. Jalankan Aplikasi',
    component: <BuildApkPage/>,
  },
  {
    id: 'menu4',
    icon: 'fas fa-chart-bar',
    label: '4. Kuis',
    component: <KuisPage />,
  },
];

const findMenuById = (items: MenuItem[], id: string): MenuItem | undefined => {
  for (const item of items) {
    if (item.id === id) return item;
    if (item.submenu) {
      const found = findMenuById(item.submenu, id);
      if (found) return found;
    }
  }
  return undefined;
};

const App: React.FC = () => {
  const [selected, setSelected] = useState<string>('menu1');

  const activeMenu = findMenuById(menuItems, selected);

  return (
    <div className="flex h-screen font-sans bg-white">
      {/* Sidebar */}
      <div className="w-60 flex-shrink-0 overflow-y-auto border-r border-gray-200">
        <Sidebar menuItems={menuItems} onSelected={setSelected} />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeMenu?.component ?? <div className="p-8">Pilih menu</div>}
      </div>
    </div>

  );
};

export default App;
