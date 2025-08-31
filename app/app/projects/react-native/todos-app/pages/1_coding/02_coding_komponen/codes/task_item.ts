export const kodeTaskItem = `
//TODO: impor View, Text, TouchableOpacity,  StyleSheet dari react-native
//TODO: impor Icon dari react-native-vector/icons/FontAwesome5

const TaskItem = ({id, iconName, title, tanggal, namaKategori, isChecked, onToggleCheck, navigation }) => {
    // Gaya untuk teks jika tugas sudah selesai (dicoret)
    const checkedStyle = {
        textDecorationLine: 'line-through',
        color: '#9CA3AF'
    };

    // Membuat subtitle secara dinamis.
    // Array ini akan diisi dengan tanggal dan namaKategori jika keduanya ada.
    // filter(Boolean) akan menghapus nilai null, undefined, atau string kosong.
    const subtitle = [tanggal, namaKategori].filter(Boolean).join(' - ');

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("HalamanDetail", {tugasId: id})
            }}
        >
            <View style={styles.container}>
                <View style={styles.leftContent}>
                    {/* Checkbox */}
                    <TouchableOpacity onPress={onToggleCheck} style={styles.checkbox}>
                        <Icon
                            name={isChecked ? 'check-square' : 'square'}
                            size={24}
                            color="#4B4BD9"
                            solid={isChecked} // Gunakan ikon solid jika tercentang
                        />
                    </TouchableOpacity>

                    {/* Ikon Asli */}
                    <Icon name={iconName} size={20} color={isChecked ? '#9CA3AF' : "#4B4BD9"} solid />

                    {/* Konten Teks */}
                    <View>
                        <Text style={[styles.title, isChecked && checkedStyle]}>{title}</Text>
                        {/* Tampilkan komponen Text untuk subtitle HANYA jika subtitle tidak kosong */}
                        {subtitle ? (
                            <Text style={[styles.countText, isChecked && checkedStyle]}>
                                {subtitle}
                            </Text>
                        ) : null}
                    </View>
                </View>
                <TouchableOpacity>
                    <Icon name="chevron-right" size={14} color="#9CA3AF" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};
`