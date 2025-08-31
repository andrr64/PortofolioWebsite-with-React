export const modalTambahTugas = `
// src/modals/TambahTugasModal.js

// TODO: import React, { useState, useEffect } dari 'react'
// TODO: import Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Alert dari 'react-native'
// TODO: import Icon dari 'react-native-vector-icons/FontAwesome5'
// TODO: import DateTimePicker dari '@react-native-community/datetimepicker'
// TODO: import { semuaKategori } dari '../database/models/kategori'
// TODO: import { tambahTugas } dari '../database/models/tugas'

// Helper untuk membuat objek tugas awal yang bersih
const getInitialTaskState = () => ({
    judul: '',
    deskripsi: '',
    tanggal: '',
    waktuMulai: '',
    waktuSelesai: '',
    idKategori: null,
});

const TambahTugasModal = ({ visible, onClose, onSaveSuccess }) => {
    // TODO: buatlah state tugas dan setTugas dengan nilai default getInitialTaskState()
    const [tugas, setTugas] = useState(getInitialTaskState());
    
    // TODO: buatlah state daftarKategori dan setDaftarKategori dengan nilai default []
    const [daftarKategori, setDaftarKategori] = useState([]);

    // TODO: buatlah state pickerState dan setPickerState dengan nilai default { visible: false, mode: 'date', target: 'tanggal' }
    const [pickerState, setPickerState] = useState({
        visible: false,
        mode: 'date',
        target: 'tanggal'
    });

    // Mengambil data kategori dan mereset form saat modal dibuka
    useEffect(() => {
        const ambilDataAwal = () => {
            if (visible) {
                try {
                    const kategori = semuaKategori();
                    setDaftarKategori(kategori);
                    setTugas(getInitialTaskState()); // Reset form
                } catch (error) {
                    console.error("Gagal mengambil kategori:", error);
                    Alert.alert("Error", "Gagal memuat data kategori.");
                }
            }
        };
        ambilDataAwal();
    }, [visible]);

    // Handler untuk memperbarui state tugas
    const handlePerbaruiTugas = (field, value) => {
        setTugas(prevTugas => {
            const tugasBaru = { ...prevTugas, [field]: value };
            if (field === 'waktuMulai' && !value) {
                tugasBaru.waktuSelesai = '';
            }
            return tugasBaru;
        });
    };

    // Handler saat tombol "Simpan" ditekan
    const handleSimpan = () => {
        if (!tugas.judul || tugas.judul.trim() === '') {
            Alert.alert("Input Kosong", "Harap isi judul tugas sebelum menyimpan.");
            return;
        }

        try {
            tambahTugas(tugas);
            Alert.alert("Sukses", "Tugas baru berhasil disimpan!");
            onSaveSuccess();
            onClose();
        } catch (error) {
            console.error(error);
            Alert.alert("Gagal Menyimpan", "Terjadi kesalahan saat menyimpan tugas.");
        }
    };

    // Fungsi untuk membuka DateTimePicker
    const bukaDateTimePicker = (mode, target) => {
        setPickerState({ visible: true, mode, target });
    };

    // Handler untuk perubahan pada DateTimePicker
    const handlePerubahanPicker = (event, tanggalTerpilih) => {
        setPickerState({ ...pickerState, visible: false });
        if (event.type === 'set' && tanggalTerpilih) {
            let nilai = (pickerState.mode === 'date')
                ? tanggalTerpilih.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' })
                : tanggalTerpilih.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
            handlePerbaruiTugas(pickerState.target, nilai);
        }
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.pusat}>
                <View style={styles.kontenModal}>
                    <Text style={styles.judul}>Tugas Baru</Text>
                    <ScrollView keyboardShouldPersistTaps="handled" style={styles.scrollContainer}>
                        {/* Form Input Judul & Deskripsi */}
                        <TextInput
                            placeholder="Judul Tugas"
                            style={styles.taskInput}
                            value={tugas.judul}
                            onChangeText={(text) => handlePerbaruiTugas('judul', text)}
                        />
                        <TextInput
                            placeholder="Deskripsi (opsional)"
                            style={styles.taskInputDescription}
                            value={tugas.deskripsi}
                            onChangeText={(text) => handlePerbaruiTugas('deskripsi', text)}
                            multiline
                        />

                        {/* Pilihan Kategori */}
                        <Text style={styles.categoryLabel}>Kategori</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScrollView}>
                            {daftarKategori.map(kategori => (
                                <TouchableOpacity
                                    key={kategori.id}
                                    style={[styles.categoryChip, { backgroundColor: kategori.warna }, tugas.idKategori === kategori.id && styles.categoryChipSelected]}
                                    onPress={() => handlePerbaruiTugas('idKategori', kategori.id)}>
                                    <Text style={styles.categoryChipText}>{kategori.nama}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>

                        {/* Pilihan Jadwal */}
                        <View style={styles.dateTimeContainer}>
                            <TouchableOpacity style={styles.dateTimeButton} onPress={() => bukaDateTimePicker('date', 'tanggal')}>
                                <Text style={styles.dateTimeText}>{tugas.tanggal || 'Tanggal'}</Text>
                                {!!tugas.tanggal && <TouchableOpacity style={styles.clearButton} onPress={() => handlePerbaruiTugas('tanggal', '')}><Icon name="times-circle" size={16} color="#9CA3AF" solid /></TouchableOpacity>}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dateTimeButton} onPress={() => bukaDateTimePicker('time', 'waktuMulai')}>
                                <Text style={styles.dateTimeText}>{tugas.waktuMulai || 'Mulai'}</Text>
                                {!!tugas.waktuMulai && <TouchableOpacity style={styles.clearButton} onPress={() => handlePerbaruiTugas('waktuMulai', '')}><Icon name="times-circle" size={16} color="#9CA3AF" solid /></TouchableOpacity>}
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.dateTimeButton, !tugas.waktuMulai && styles.disabledButton]}
                                onPress={() => bukaDateTimePicker('time', 'waktuSelesai')}
                                disabled={!tugas.waktuMulai}>
                                <Text style={styles.dateTimeText}>{tugas.waktuSelesai || 'Selesai'}</Text>
                                {!!tugas.waktuSelesai && <TouchableOpacity style={styles.clearButton} onPress={() => handlePerbaruiTugas('waktuSelesai', '')}><Icon name="times-circle" size={16} color="#9CA3AF" solid /></TouchableOpacity>}
                            </TouchableOpacity>
                        </View>
                        {pickerState.visible && (
                            <DateTimePicker
                                value={new Date()}
                                mode={pickerState.mode}
                                is24Hour={true}
                                display="default"
                                onChange={handlePerubahanPicker}
                            />
                        )}
                    </ScrollView>

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

export default TambahTugasModal;

const styles ......
`