import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const { width } = Dimensions.get('window');

const UserAppointment = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [booking, setBookings] = useState([]);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await axios.get(`https://rms-backend-plum.vercel.app/api/booking/${currentUser._id}`);
        setBookings(res.data.booking);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooking();
  }, []);

  const renderAppointment = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.doctorId.image }} style={styles.doctorImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.doctorName}>{item.doctorId.name}</Text>
        <Text style={styles.patientName}>For: {item.name}</Text>
        <Text style={styles.datetime}>📅 {item.date} | 🕒 {item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Appointments</Text>
      <FlatList
        data={booking}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderAppointment}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default UserAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#2f3640',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  doctorImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  doctorName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#273c75',
  },
  patientName: {
    fontSize: 14,
    color: '#353b48',
    marginVertical: 4,
  },
  datetime: {
    fontSize: 13,
    color: '#718093',
  },
});
