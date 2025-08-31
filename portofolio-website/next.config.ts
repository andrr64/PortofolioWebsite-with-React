import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Konfigurasi umum Next.js
   * Website ini akan di-deploy sebagai static export (tanpa server-side rendering).
   */
  
  // Base path (prefix URL) untuk semua route.
  // Misalnya halaman "/" akan diakses di "/portofolio/"
  basePath: '/portofolio',

  // Prefix untuk aset (gambar, CSS, JS, dll).
  // Supaya semua asset di-load dari "/portofolio/"
  assetPrefix: '/portofolio/',

  // Output dalam bentuk static export (tanpa server).
  // Hasil build bisa langsung di-host di static hosting (misal GitHub Pages, cPanel, dll).
  output: 'export',

  // Menambahkan trailing slash di akhir URL (contoh: /about/ bukan /about).
  trailingSlash: true, 

  // Menonaktifkan error ESLint saat build (berguna kalau ada warning linting).
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    // Supaya Next.js tidak melakukan optimisasi gambar.
    // Wajib kalau pakai `next export` karena optimisasi butuh server.
    unoptimized: true,
  },
};

export default nextConfig;
