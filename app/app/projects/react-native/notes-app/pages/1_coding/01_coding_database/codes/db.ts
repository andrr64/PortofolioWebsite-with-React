// ./db.js

export const dbjs_code = `
// db.js
import * as SQLite from 'expo-sqlite';

export const TABEL_NOTE = 'notes';

const BUAT_TABEL_NOTE = \`
  CREATE TABLE IF NOT EXISTS \${TABEL_NOTE} (
    id INTEGER PRIMARY KEY NOT NULL,
    judul TEXT NOT NULL,
    tanggal TEXT NOT NULL,
    catatan TEXT
  );
\`;

const db = SQLite.openDatabaseSync('notes_app.db');

export const getDB = () => {
  return db;
};

export const initDB = () => {
  try {
    db.execSync(BUAT_TABEL_NOTE);
    console.log('Tabel "notes" berhasil disiapkan.');
  } catch (error) {
    console.error('Gagal inisialisasi database:', error);
  }
};
`;
