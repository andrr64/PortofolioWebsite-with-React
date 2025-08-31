export const add_note_modal_code = `
import { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { tambahCatatan } from '../database/models/note';

const AddNoteModal = ({ visible, onClose, onSuccess }) => {
  const [judul, setTitle] = useState('');
  const [catatan, setNote] = useState('');

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

          {/* Input for Title */}
          <TextInput
            placeholder="Judul"
            value={judul}
            onChangeText={setTitle}
            style={styles.input}
          />

          {/* Input for Note */}
          <TextInput
            placeholder="Tulis catatan Anda di sini..."
            value={catatan}
            onChangeText={setNote}
            style={[styles.input, styles.textArea]}
            multiline={true}
            numberOfLines={4}
          />

          {/* Action Buttons */}
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