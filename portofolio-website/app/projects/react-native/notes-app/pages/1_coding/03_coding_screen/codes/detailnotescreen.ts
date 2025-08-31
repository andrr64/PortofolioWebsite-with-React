export const detail_note_screen = `
/* TODO: import React dan useState dari react
   TODO: import StyleSheet, View, Text, ScrollView, TouchableOpacity, Alert, TextInput dari react-native
   TODO: import SafeAreaView, useSafeAreaInsets dari react-native-safe-area-context
   TODO: import Icon dari react-native-vector-icons/FontAwesome5
   TODO: import hapusCatatan, updateCatatan dari ../database/models/note
*/

const DetailCatatan = ({ route, navigation }) => {
    const { note } = route.params;
    const insets = useSafeAreaInsets();

    /* TODO: Buat state isEditing dan setIsEditing untuk status edit (default: false)
       TODO: Buat state judul dan setJudul untuk menyimpan judul catatan (default: note.judul)
       TODO: Buat state catatan dan setCatatan untuk menyimpan isi catatan (default: note.catatan)
    */

    const handleDelete = () => {
        Alert.alert(
            "Hapus Catatan",
            "Apakah Anda yakin ingin menghapus catatan ini?",
            [
                { text: "Batal", style: "cancel" },
                {
                    text: "Hapus",
                    onPress: () => {
                        try {
                            const hasil = hapusCatatan(note.id);
                            if (hasil) {
                                Alert.alert("Sukses", "Catatan berhasil dihapus.");
                            } else {
                                Alert.alert("Gagal", "Catatan tidak ditemukan.");
                            }
                            navigation.goBack();
                        } catch (error) {
                            Alert.alert("Error", "Terjadi kesalahan saat menghapus catatan.");
                        }
                    },
                    style: 'destructive'
                }
            ]
        );
    };

    const handleUpdate = () => {
        if (judul.trim() === '') {
            Alert.alert("Validasi Gagal", "Judul tidak boleh kosong.");
            return;
        }
        try {
            const berhasil = updateCatatan(note.id, { judul, catatan });
            if (berhasil) {
                Alert.alert("Sukses", "Catatan berhasil diperbarui.");
                setIsEditing(false);
            } else {
                Alert.alert("Gagal", "Tidak ada perubahan yang disimpan.");
            }
            navigation.navigate({ name: 'home' });
        } catch (error) {
            Alert.alert("Error", "Terjadi kesalahan saat memperbarui catatan.");
        }
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <Text style={styles.date}>{note.tanggal}</Text>
                    {isEditing ? (
                        <TextInput
                            style={[styles.title, styles.input]}
                            value={judul}
                            onChangeText={setJudul}
                            placeholder="Judul Catatan"
                        />
                    ) : (
                        <Text style={styles.title}>{judul}</Text>
                    )}
                </View>
                {isEditing ? (
                    <TextInput
                        style={[styles.content, styles.input, styles.textArea]}
                        value={catatan}
                        onChangeText={setCatatan}
                        placeholder="Isi Catatan"
                        multiline
                    />
                ) : (
                    <Text style={styles.content}>{catatan}</Text>
                )}
            </ScrollView>

            {/* Tombol Aksi di bagian bawah */}
            <View style={[styles.actionContainer, { paddingBottom: insets.bottom }]}>
                <TouchableOpacity style={[styles.actionButton, styles.deleteButton]} onPress={handleDelete}>
                    <Icon name="trash" size={18} color="#FFF" />
                    <Text style={styles.actionButtonText}>Hapus</Text>
                </TouchableOpacity>

                {isEditing ? (
                    <TouchableOpacity style={[styles.actionButton, styles.updateButton]} onPress={handleUpdate}>
                        <Icon name="save" size={18} color="#FFF" />
                        <Text style={styles.actionButtonText}>Update</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={[styles.actionButton, styles.editButton]} onPress={() => setIsEditing(true)}>
                        <Icon name="pen" size={18} color="#FFF" />
                        <Text style={styles.actionButtonText}>Edit</Text>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    );
};




const styles = ..... (tidak perlu)
`