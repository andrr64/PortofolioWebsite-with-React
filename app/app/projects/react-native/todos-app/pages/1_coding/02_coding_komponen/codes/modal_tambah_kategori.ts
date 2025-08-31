export const modalTambahKategori = `
// TODO: import React, { useState } dari 'react'
// TODO: import Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert dari 'react-native'
// TODO: import { tambahKategori } dari '../database/models/kategori'

const WARNA_PILIHAN = [
    '#F97316', '#7C3AED', '#DC2626', '#2563EB',
    '#16A34A', '#FBBF24', '#EC4899', '#6B7280',
];

const TambahKategoriModal = ({ visible, onClose, onSuccess }) => {
    // TODO: buatlah state/variabel namaKategori dan setNamaKategori dengan nilai default ''
    // TODO: buatlah state/variabel warnaTerpilih dan setWarnaTerpilih dengan nilai default WARNA_PILIHAN[0]

    const handleSimpan = () => {
        if (namaKategori.trim().length <= 0) {
            Alert.alert("Gagal", "Masukkan nama!");
            return;
        }
        tambahKategori(namaKategori, warnaTerpilih);
        setNamaKategori(''); // Reset input
        onSuccess();
        onClose(); // Tutup modal
        Alert.alert("Sukses", "Kategori berhasil ditambahkan");
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.pusat}
            >
                <View style={styles.kontenModal}>
                    <Text style={styles.judul}>Kategori Baru</Text>

                    {/* Input Nama Kategori */}
                    <TextInput
                        placeholder="Nama Kategori"
                        placeholderTextColor="#9CA3AF"
                        style={styles.input}
                        value={namaKategori}
                        onChangeText={setNamaKategori}
                    />

                    {/* Pilihan Warna */}
                    <Text style={styles.subJudul}>Pilih Warna</Text>
                    <View style={styles.wadahWarna}>
                        {WARNA_PILIHAN.map((warna) => (
                            <TouchableOpacity
                                key={warna}
                                style={[styles.lingkaranWarna, { backgroundColor: warna }]}
                                onPress={() => setWarnaTerpilih(warna)}
                            >
                                {warnaTerpilih === warna && <View style={styles.centangWarna} />}
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Tombol Aksi */}
                    <View style={styles.wadahTombol}>
                        <TouchableOpacity style={[styles.tombol, styles.tombolBatal]} onPress={onClose}>
                            <Text style={styles.teksTombolBatal}>Batal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.tombol, styles.tombolSimpan]} onPress={handleSimpan}>
                            <Text style={styles.teksTombolSimpan}>Simpan</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
};
export default TambahKategoriModal;


const styles = .......
`;
