export const notecard_code = `
import....
import....
import....
import....

const NoteCard = ({ note, navigator }) => {
  function pindahKeHalamanDetail() {
    navigator.navigate("detail", { note: note });
  }

  return (
    <TouchableOpacity onPress={pindahKeHalamanDetail}>
      <View style={styles.noteCard}>
        <Text style={styles.noteDate}>{note.tanggal}</Text>
        <Text style={styles.noteTitle}>{note.judul}</Text>
        <Text style={styles.noteContent} numberOfLines={3} ellipsizeMode="tail">
          {note.catatan}
        </Text>
      </View>
    </TouchableOpacity>
  );
};



const style = ............
`