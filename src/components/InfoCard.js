import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const InfoCard = ({ title, status, onPress }) => {
  const isSelesai = status.toLowerCase() === 'selesai';

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.badge, isSelesai ? styles.badgeSelesai : styles.badgeProses]}>
          <Text style={[styles.statusText, isSelesai ? styles.textSelesai : styles.textProses]}>
            {status}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 18,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, // Efek bayangan untuk Android
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: { fontSize: 17, fontWeight: '700', color: '#1f2937', flex: 1 },
  badge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  badgeSelesai: { backgroundColor: '#dcfce7' }, // Hijau pastel
  badgeProses: { backgroundColor: '#fef9c3' }, // Kuning pastel
  textSelesai: { color: '#166534', fontWeight: 'bold', fontSize: 12, textTransform: 'capitalize' },
  textProses: { color: '#854d0e', fontWeight: 'bold', fontSize: 12, textTransform: 'capitalize' },
  button: { backgroundColor: '#4f46e5', padding: 14, borderRadius: 12, alignItems: 'center' }, // Warna Indigo modern
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 15 }
});

export default InfoCard;