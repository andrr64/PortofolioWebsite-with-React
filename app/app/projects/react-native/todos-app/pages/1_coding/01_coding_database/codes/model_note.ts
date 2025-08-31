export const model_note_code = `
// TODO: impor getDB, TABEL_NOTE dari ../db;



const db = getDB();


export const tambahCatatan = ({ judul, catatan }) => {
  const tanggal = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short' }).toUpperCase();

  try {
    const result = db.runSync(
      \`INSERT INTO \${ TABEL_NOTE } (judul, tanggal, catatan) VALUES(?, ?, ?);\`,
      [judul, tanggal, catatan]
    );
    return result.lastInsertRowId;
  } catch (error) {
    console.error('❌ Gagal menambah catatan:', error);
    throw error;
  }
};

export const semuaCatatan = () => {
  try {
    const query = \`SELECT * FROM \${ TABEL_NOTE } ORDER BY id DESC;\`;
    const semuaCatatan = db.getAllSync(query);
    return semuaCatatan;
  } catch (error) {
    console.error('❌ Gagal mengambil semua catatan:', error);
    throw error;
  }
};

export const updateCatatan = (id, { judul, catatan }) => {
  try {
    const result = db.runSync(
      \`UPDATE \${ TABEL_NOTE } SET judul = ?, catatan = ? WHERE id = ?;\`,
      [judul, catatan, id]
    );
    return result.changes > 0;
  } catch (error) {
    console.error(\`❌ Gagal update catatan dengan ID \${id}:\`, error);
    throw error;
  }
};

export const hapusCatatan = (id) => {
  try {
    const result = db.runSync(
      \`DELETE FROM \${ TABEL_NOTE } WHERE id = ?;\`,
      [id]
    );
    return result.changes > 0;
  } catch (error) {
    console.error(\`❌ Gagal menghapus catatan dengan ID \${id}:\`, error);
    throw error;
  }
};

`;
