export const kode_model_tugas = `
// TODO: impor getDB, TABEL_KATEGORI, TABEL TUGAS dari ../db



const db = getDB();

export const tambahTugas = (tugas) => {
  if (!tugas || !tugas.judul) {
    throw new Error("Data tugas tidak valid.");
  }
  if (!db) return;

  try {
    const sql = \`
      INSERT INTO \${TABEL_TUGAS}
(judul, deskripsi, sudahSelesai, tanggal, waktuMulai, waktuSelesai, idKategori)
VALUES(?, ?, ?, ?, ?, ?, ?);
\`;
    const params = [
      tugas.judul,
      tugas.deskripsi || null,
      0, // Default status belum selesai
      tugas.tanggal || null,
      tugas.waktuMulai || null,
      tugas.waktuSelesai || null,
      tugas.idKategori || null,
    ];
    db.runSync(sql, params);
  } catch (error) {
    console.error("Gagal menyimpan tugas:", error);
    throw new Error("Gagal menyimpan tugas ke database.");
  }
};

/**
 * FUNGSI BARU: Mengambil satu tugas berdasarkan ID-nya.
 */
export const getTugasById = (id) => {
  try {
    const query = \`
      SELECT t.*, k.nama as namaKategori, k.warna as warnaKategori
      FROM \${TABEL_TUGAS} t
      LEFT JOIN \${TABEL_KATEGORI} k ON t.idKategori = k.id
      WHERE t.id = ?;
\`;
    return db.getFirstSync(query, [id]);
  } catch (error) {
    console.error(\`Gagal mengambil tugas dengan id \${id}: \`, error);
    throw error;
  }
};


/**
 * Mengambil semua tugas yang belum selesai (sudahSelesai = 0).
 */
export const semuaTugasBelumSelesai = () => {
  try {
    const query = \`
      SELECT t.*, k.nama as namaKategori, k.warna as warnaKategori
      FROM \${TABEL_TUGAS} t
      LEFT JOIN \${TABEL_KATEGORI} k ON t.idKategori = k.id
      WHERE t.sudahSelesai = 0
      ORDER BY t.tanggal ASC, t.waktuMulai ASC;
\`;
    return db.getAllSync(query);
  } catch (error) {
    console.error('Gagal mengambil tugas yang belum selesai:', error);
    throw error;
  }
};

/**
 * Mengambil semua tugas yang SUDAH selesai (sudahSelesai = 1).
 */
export const semuaTugasSelesai = () => {
  try {
    const query = \`
      SELECT t.*, k.nama as namaKategori, k.warna as warnaKategori
      FROM \${TABEL_TUGAS} t
      LEFT JOIN \${TABEL_KATEGORI} k ON t.idKategori = k.id
      WHERE t.sudahSelesai = 1
      ORDER BY t.tanggal DESC, t.waktuMulai DESC;
\`;
    return db.getAllSync(query);
  } catch (error) {
    console.error('Gagal mengambil tugas yang sudah selesai:', error);
    throw error;
  }
};


// --- FUNGSI-FUNGSI LAINNYA ---

export const semuaTugas = () => {
  try {
    const query = \`
      SELECT t.*, k.nama as namaKategori, k.warna as warnaKategori
      FROM \${TABEL_TUGAS} t
      LEFT JOIN \${TABEL_KATEGORI} k ON t.idKategori = k.id
      ORDER BY t.tanggal DESC, t.waktuMulai ASC;
\`;
    return db.getAllSync(query);
  } catch (error) {
    console.error('Gagal mengambil semua tugas:', error);
    throw error;
  }
};

export const updateTugas = (id, tugas) => {
    const {
        judul, deskripsi, tanggal, waktuMulai,
        waktuSelesai, idKategori, sudahSelesai
    } = tugas;
  try {
    const result = db.runSync(
      \`UPDATE \${TABEL_TUGAS} SET judul = ?, deskripsi = ?, tanggal = ?, waktuMulai = ?, waktuSelesai = ?, idKategori = ?, sudahSelesai = ? WHERE id = ?; \`,
      [judul, deskripsi, tanggal, waktuMulai, waktuSelesai, idKategori, sudahSelesai, id]
    );
    return result.changes > 0;
  } catch (error) {
    console.error(\`Gagal update tugas dengan id \${id}: \`, error);
    throw error;
  }
};

export const updateStatusTugas = (id, sudahSelesai) => {
    try {
        const statusAngka = sudahSelesai ? 1 : 0;
        const result = db.runSync(
            \`UPDATE \${TABEL_TUGAS} SET sudahSelesai = ? WHERE id = ?; \`,
            [statusAngka, id]
        );
        return result.changes > 0;
    } catch (error) {
        console.error(\`Gagal update status tugas dengan id \${id}: \`, error);
        throw error;
    }
};

export const hapusTugas = (id) => {
  try {
    const result = db.runSync(
      \`DELETE FROM \${TABEL_TUGAS} WHERE id = ?; \`,
      [id]
    );
    return result.changes > 0;
  } catch (error) {
    console.error(\`Gagal menghapus tugas dengan id \${id}: \`, error);
    throw error;
  }
};
`
