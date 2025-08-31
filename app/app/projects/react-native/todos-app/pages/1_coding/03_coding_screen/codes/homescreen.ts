export const homescreen_code = `
/* TODO: import useState dan useCallback dari react
   TODO: import StyleSheet, View, Text, ScrollView, TouchableOpacity dari react-native
   TODO: import useFocusEffect dari @react-navigation/native
   TODO: import SafeAreaView dari react-native-safe-area-context
   TODO: import Icon dari react-native-vector-icons/FontAwesome5
   TODO: import NoteCard dari ../components/NoteCard
   TODO: import AddNoteModal dari ../modals/AddNoteModal
   TODO: import semuaCatatan as ambilSemuaDataCatatan dari ../database/models/note
*/

const Homescreen = ({ navigation }) => {
  /* TODO: Buat state isModalVisible dan setModalVisible untuk mengatur status modal (default: false)
     TODO: Buat state notes dan setNotes untuk menyimpan daftar catatan (default: [])
  */
  
  function getData() {
    setNotes(ambilSemuaDataCatatan());
  }

  useFocusEffect(
    useCallback(() => {
        getData();
    }, [])
  );

  const openAddNoteModal = () => {
    setModalVisible(true);
  };

  const closeAddNoteModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <AddNoteModal
        visible={isModalVisible}
        onClose={closeAddNoteModal}
        onSuccess={getData}
      />
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Notes</Text>
          <Text style={styles.headerSubtitle}>Here are your recent notes</Text>
        </View>

        <View style={styles.contentArea}>
          {notes.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Icon name="sticky-note" size={60} color="#D1D5DB" solid />
              <Text style={styles.emptyText}>Belum Ada Catatan</Text>
              <Text style={styles.emptySubText}>Ketuk tombol '+' untuk menambahkan.</Text>
            </View>
          ) : (
            <ScrollView contentContainerStyle={styles.mainContent}>
              {notes.map(note => (
                <NoteCard key={note.id} note={note} navigator={navigation} />
              ))}
            </ScrollView>
          )}
        </View>

        <TouchableOpacity style={styles.addButton} onPress={openAddNoteModal}>
          <Icon name="plus" size={22} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles  = ......... (tidak perlu)
`;
