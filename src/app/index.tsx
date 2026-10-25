import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import InfoCard from '../components/InfoCard';

const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
];

export default function App() {
  const [keyword, setKeyword] = useState('');

  const filteredData = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        {/* Bagian Daftar Tugas */}
        <View style={styles.section}>
          <Text style={styles.header}>Daftar Tugas</Text>
          <InfoCard 
            title="Desain UI/UX Aplikasi" 
            status="selesai" 
            onPress={() => alert('Detail Tugas UI/UX')} 
          />
          <InfoCard 
            title="Ujian Mobile Computing" 
            status="proses" 
            onPress={() => alert('Detail Ujian Mobile Computing')} 
          />
        </View>

        {/* Bagian Direktori Mahasiswa */}
        <View style={styles.sectionFlex}>
          <Text style={styles.header}>Direktori Mahasiswa</Text>
          
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="🔍 Cari nama mahasiswa..."
              placeholderTextColor="#9ca3af"
              value={keyword}
              onChangeText={setKeyword}
            />
          </View>

          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{item.nama.charAt(0)}</Text>
                </View>
                <View style={styles.itemInfo}>
                  <Text style={styles.itemName}>{item.nama}</Text>
                  <Text style={styles.itemProdi}>{item.prodi}</Text>
                </View>
              </View>
            )}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>Oops! Mahasiswa tidak ditemukan.</Text>
              </View>
            }
          />
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#f3f4f6', 
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 
  },
  container: { flex: 1, paddingHorizontal: 20 },
  section: { marginTop: 20, marginBottom: 15 },
  sectionFlex: { flex: 1 },
  header: { fontSize: 22, fontWeight: '800', color: '#111827', marginBottom: 10 },
  
  searchContainer: { marginBottom: 15 },
  searchInput: { 
    backgroundColor: '#ffffff', 
    padding: 14, 
    borderRadius: 12, 
    fontSize: 16, 
    color: '#1f2937', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.05, 
    shadowRadius: 4, 
    elevation: 2 
  },
  
  listContainer: { paddingBottom: 20 },
  listItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#ffffff', 
    padding: 15, 
    borderRadius: 16, 
    marginBottom: 12, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.05, 
    shadowRadius: 4, 
    elevation: 2 
  },
  avatar: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    backgroundColor: '#e0e7ff', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 15 
  },
  avatarText: { fontSize: 20, fontWeight: 'bold', color: '#4f46e5' },
  itemInfo: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: '700', color: '#1f2937', marginBottom: 4 },
  itemProdi: { fontSize: 14, color: '#6b7280' },
  
  emptyContainer: { alignItems: 'center', marginTop: 30 },
  emptyText: { color: '#ef4444', fontStyle: 'italic', fontSize: 15 }
});