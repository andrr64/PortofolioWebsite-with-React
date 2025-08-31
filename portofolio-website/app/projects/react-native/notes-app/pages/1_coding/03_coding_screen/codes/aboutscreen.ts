export const about_screen_code = `
import React from 'react';
// TODO: import View, Text, StyleSheet, Image dari react-native
// TODO: import SafeAreaView dari react-native-safe-area-context

// --- Sub-Components for UI ---
const Header = ({ title }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
    </View>
);

const ProfileSection = ({ imageUrl, name, description }) => (
    <View style={styles.profileContainer}>
        <Image
            source={{ uri: imageUrl }}
            style={styles.profileImage}
            // Fallback in case the image fails to load
            onError={(e) => console.log('Failed to load image:', e.nativeEvent.error)}
        />
        <Text style={styles.profileName}>{name}</Text>
        <Text style={styles.profileDescription}>{description}</Text>
    </View>
);

// --- Main Component ---
export default function AboutScreen() {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Header title="Tentang Aplikasi" />
            <View style={styles.content}>
                <ProfileSection
                    imageUrl="https://placehold.co/150x150/E2E8F0/4A5568?text=Foto+Profil"
                    name="Nama Pengembang"
                    description="Aplikasi ini dibuat untuk membantu Anda mengelola keuangan pribadi dengan lebih mudah dan efisien. Lacak setiap pemasukan dan pengeluaran untuk mencapai tujuan finansial Anda."
                />
            </View>
        </SafeAreaView>
    );
}

const styles = ......... (tidak perlu)
`;
