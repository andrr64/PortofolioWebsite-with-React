export const kode_model_kategori = `
import { getDB, TABEL_KATEGORI, TABEL_TUGAS } from "../db";

const db = getDB();

export const tambahKategori = (nama, warna) => {
  try {
    const result = db.runSync(
      \`INSERT INTO \${TABEL_KATEGORI} (nama, warna) VALUES (?, ?);\`,
      [nama, warna]
    );
    return result.lastInsertRowId;
  } catch (error) {
    console.error('Gagal menambah kategori:', error);
    throw error;
  }
};

export const semuaKategori = () => {
  const db = getDB();
  try {
    const query = \`
      SELECT
        c.id,
        c.nama,
        c.warna,
        COUNT(t.id) as taskCount
      FROM
        \${TABEL_KATEGORI} c
      LEFT JOIN
        \${TABEL_TUGAS} t ON c.id = t.idKategori
      GROUP BY
        c.id, c.nama, c.warna
      ORDER BY
        c.nama;
    \`;
    const allRows = db.getAllSync(query);
    return allRows;
  } catch (error) {
    console.error('Gagal mengambil semua kategori dengan jumlah tugas:', error);
    throw error;
  }
};


export const updateKategori = (id, nama, warna) => {
  try {
    const result = db.runSync(
      \`UPDATE \${TABEL_KATEGORI} SET nama = ?, warna = ? WHERE id = ?;\`,
      [nama, warna, id]
    );
    return result.changes > 0;
  } catch (error) {
    console.error(\`Gagal update kategori dengan id \${id}:\`, error);
    throw error;
  }
};

export const hapusKategori = (id) => {
  try {
    const result = db.runSync(
      \`DELETE FROM \${TABEL_KATEGORI} WHERE id = ?;\`,
      [id]
    );
    return result.changes > 0;
  } catch (error) {
    console.error(\`Gagal menghapus kategori dengan id \${id}:\`, error);
    throw error;
  }
};
`
