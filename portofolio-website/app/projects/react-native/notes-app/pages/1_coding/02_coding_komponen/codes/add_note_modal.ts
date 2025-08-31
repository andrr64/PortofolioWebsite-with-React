export const add_note_modal_code = `
import { useState } from 'react';
import { tambahCatatan } from '../database/models/note';
// TODO: Import komponen lain yang dibutuhkan dari 'react-native' (Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert)

const AddNoteModal = ({ visible, onClose, onSuccess }) => {
  // TODO: Buatlah state 'judul' dan fungsi 'setTitle' dengan useState('')
  // TODO: Buatlah state 'catatan' dan fungsi 'setNote' dengan useState('')

  const handleSave = () => {
    if (judul.trim() === '' || catatan.trim() === '') {
      Alert.alert('Gagal!', 'Judul dan Catatan tidak boleh kosong.');
      return;
    }  
    const dataBaru = {judul, catatan}
    tambahCatatan(dataBaru)
    Alert.alert("Berhasil", "Catatan berhasil disimpan");
    onSuccess();
    handleClose();
  };

  const handleClose = () => {
    setTitle('');
    setNote('');
    onClose();
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}
    >
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.centeredView}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Catatan Baru</Text>

          {/* Input untuk Judul */}
          <TextInput
            placeholder="Judul"
            value={judul}
            onChangeText={setTitle}
            style={styles.input}
          />

          {/* Input untuk Catatan */}
          <TextInput
            placeholder="Tulis catatan Anda di sini..."
            value={catatan}
            onChangeText={setNote}
            style={[styles.input, styles.textArea]}
            multiline={true}
            numberOfLines={4}
          />

          {/* Tombol Aksi */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={handleClose}
            >
              <Text style={styles.textStyle}>Batal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonSave]}
              onPress={handleSave}
            >
              <Text style={styles.textStyle}>Simpan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = .... (tidak perlu, sudah ada)
`