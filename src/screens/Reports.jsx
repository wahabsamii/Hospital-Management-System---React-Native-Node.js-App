import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const reports = [
  { id: '1', title: 'General report', date: 'Jul 10, 2023' },
  { id: '2', title: 'General report', date: 'Jul 5, 2023' },
];

const Reports = () => {
  return (
    <View style={styles.container}>
      {/* Heart Rate Card */}
      <View style={styles.cardRow}>
        <View style={[styles.card, { backgroundColor: '#dde8fd', flex: 1.2 }]}>
          <Text style={styles.label}>Heart rate</Text>
          <View style={styles.row}>
            <Text style={styles.heartRate}>97</Text>
            <Text style={styles.bpm}>bpm</Text>
          </View>
          <Icon name="activity" size={30} color="#2e5db7" style={{ marginTop: 8 }} />
        </View>
      </View>

      <View style={{display:'flex', flexDirection:'row'}}>
        
        {/* Blood Group */}
        <View style={[styles.card, {backgroundColor:'#FFB1CF', width:'48%'}]}>
          <Icon name="droplet" size={20} color="#6b1e23" />
          <Text style={styles.label}>Blood Group</Text>
          <Text style={styles.value}>A+</Text>
        </View>

        {/* Weight */}
        <View style={[styles.card, {backgroundColor:'#FBF0DC', width:'48%'}]}>
          <Icon name="activity" size={20} color="#d4a017" />
          <Text style={styles.label}>Weight</Text>
          <Text style={styles.value}>103lbs</Text>
        </View>
      </View>

      {/* Latest Report */}
      <Text style={styles.latestReport}>Latest report</Text>
      <FlatList
        data={reports}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reportItem}>
            <View style={styles.reportLeft}>
              <Icon name="file-text" size={24} color="#4a6fa5" />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.reportTitle}>{item.title}</Text>
                <Text style={styles.reportDate}>{item.date}</Text>
              </View>
            </View>
            <Icon name="more-vertical" size={20} color="#333" />
          </View>
        )}
      />
    </View>
  );
};

export default Reports;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  cardRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  card: {
    borderRadius: 12,
    padding: 14,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
  label: {
    fontSize: 13,
    color: '#333',
    marginTop: 4,
    fontFamily:'Poppins-Regular'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  heartRate: {
    fontSize: 50,
    fontFamily:'Poppins-Bold',
    color: '#1c1c1c',
    marginBottom:-14
  },
  bpm: {
    marginLeft: 6,
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
    fontFamily:'Poppins-Regular'
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 5,
  },
  latestReport: {
    fontSize: 18,
    fontFamily:'Poppins-Bold',
    marginVertical: 12,
    color: '#000',

  },
  reportItem: {
    backgroundColor: '#f8f8f8',
    padding: 14,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  reportLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reportTitle: {
    fontWeight: '600',
    fontSize: 14,
    fontFamily:'Poppins-SemiBold'
  },
  reportDate: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
    fontFamily:'Poppins-Regular'
  },
});
