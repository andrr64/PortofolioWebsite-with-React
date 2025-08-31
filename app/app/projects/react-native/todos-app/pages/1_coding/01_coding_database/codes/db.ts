// ./db.js

export const dbjs_code = `
import * as SQLite from 'expo-sqlite';

export const TABEL_KATEGORI = 'kategori';
export const TABEL_TUGAS = 'tugas';

const BUAT_TABEL_KATEGORI = \`
  CREATE TABLE IF NOT EXISTS \${TABEL_KATEGORI} (
  id INTEGER PRIMARY KEY NOT NULL,
    nama TEXT NOT NULL,
      warna TEXT NOT NULL
  );
\`;

const BUAT_TABEL_TUGAS = \`
  CREATE TABLE IF NOT EXISTS tugas(
  id INTEGER PRIMARY KEY NOT NULL,
  judul TEXT NOT NULL,
  deskripsi TEXT,
  sudahSelesai INTEGER NOT NULL DEFAULT 0,
  tanggal TEXT,
  waktuMulai TEXT,
  waktuSelesai TEXT,
  idKategori INTEGER,
  FOREIGN KEY(idKategori) REFERENCES kategori(id) ON DELETE SET NULL
);
\`;

const db = SQLite.openDatabaseSync('tasks_v5.db');

export const getDB = () => {
  return db;
};


const seedDataAwal = () => {
  const kategoriAwal = [
    { nama: 'Kerja', warna: '#F97316' },
    { nama: 'Belajar', warna: '#7C3AED' },
    { nama: 'Rumah', warna: '#DC2626' },
    { nama: 'Pribadi', warna: '#2563EB' },
  ];

  // Query ini akan memasukkan data HANYA JIKA nama kategori tersebut belum ada.
  const insertQuery = \`
    INSERT INTO \${TABEL_KATEGORI} (nama, warna)
SELECT ?, ?
  WHERE NOT EXISTS(
    SELECT 1 FROM \${TABEL_KATEGORI} WHERE nama = ?
    );
\`;

  let insertedCount = 0;
  // db.withTransactionSync memastikan semua proses insert berjalan sebagai satu kesatuan.
  db.withTransactionSync(() => {
    for (const kategori of kategoriAwal) {
      // db.runSync digunakan untuk perintah yang tidak mengembalikan data (INSERT, UPDATE, DELETE).
      const result = db.runSync(insertQuery, [kategori.nama, kategori.warna, kategori.nama]);

      // 'result.changes' akan bernilai 1 jika ada baris baru yang ditambahkan.
      if (result.changes > 0) {
        insertedCount++;
      }
    }
  });

  if (insertedCount > 0) {
    console.log(\`✅ Berhasil menambahkan \${insertedCount} kategori default.\`);
  } else {
    console.log('ℹ️ Kategori default sudah ada, tidak ada yang ditambahkan.');
  }
};


export const initDB = () => {
  try {
    // db.execSync digunakan untuk menjalankan satu atau lebih perintah SQL.
    db.execSync(BUAT_TABEL_KATEGORI);
    db.execSync(BUAT_TABEL_TUGAS);
    console.log('✅ Semua tabel berhasil disiapkan.');

    // Panggil fungsi untuk mengisi data awal.
    seedDataAwal();
  } catch (error) {
    console.error('❌ Gagal inisialisasi database:', error);
  }
};
`
