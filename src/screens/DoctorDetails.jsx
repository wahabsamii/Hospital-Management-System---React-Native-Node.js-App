import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'; // <-- Make sure this is correct based on the icon you're using
import moment from 'moment';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useSelector } from 'react-redux';


const generateNext10Days = () => {
  const days = [];
  const slots = ['09:00 AM', '11:00 AM', '11:00 AM', '01:00 PM', '02:00 PM']; // Customize as needed
  for (let i = 0; i < 10; i++) {
    // const date = moment().add(i, 'days').format('YYYY-MM-DD');1
    // const date = moment().add(i, 'days').format('DD');2
    // const daysName = date.toLoc

    
    const fullDate = moment().add(i, 'days');
    const date = fullDate.format('DD');
    const dayName = fullDate.format('dddd'); // e.g., Monday
    days.push({ date, day:dayName });
  }
  return days;
};

const Doctordetails = ({ route }) => {
  const { doctor } = route.params;
  const [expandText, setExpandText] = useState(false);
  const data = generateNext10Days();
  const slots = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM','03:00 PM','04:00 PM','07:00 PM','08:00 PM'];
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedtime, setSelectedTime] = useState('');
  const {currentUser} = useSelector((state) => state.user);
  const handleSelectDate = (date) => {
    setSelectedDate(date)
  };

  const handleSlot = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = async () => {
    const formData = new FormData();
    formData.append('name', currentUser.name);
    formData.append('doctorId', doctor._id);
    formData.append('date', selectedDate);
    formData.append('time', selectedtime);
    formData.append('user', currentUser._id);
    try {
      const response = await axios.post('https://rms-backend-plum.vercel.app/api/booking/book', {name: currentUser.name, doctorId: doctor._id, date: selectedDate, time: selectedtime, user: currentUser._id}, {headers:{'Content-Type':'application/json'}});
      if (response.data.success) {
        ToastAndroid.show("Appointment Booked", ToastAndroid.SHORT);
        setSelectedDate('');
        setSelectedTime('');
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <View style={styles.main}>
       <View style={styles.top}>
              <TouchableOpacity onPress={() => navigation.navigate('AllDoctors')}><Icon2 style={{fontSize:23, marginTop:-23}}  name="arrow-back-ios-new"/></TouchableOpacity>
                <Text style={styles.title}>Doctor Details</Text>
                <Text></Text>
            </View>
      <View>
        <View style={styles.card}>
          <Image source={{ uri: doctor.image }} style={styles.img} />
          <View>
            <Text style={styles.name}>{doctor.name}</Text>
            <Text style={styles.specialty}>{doctor.specialty}</Text>
            <Text style={styles.address}>
              <Icon name="location-outline" size={16} /> {doctor.address}
            </Text>
          </View>
        </View>
        <View>
            <Text style={{fontFamily:'Poppins-SemiBold', fontSize:20}}>About </Text>
            <Text style={{fontFamily:'Poppins-Regular'}} numberOfLines={expandText ? undefined : 3}>{doctor.description}</Text>
            <TouchableOpacity onPress={() => setExpandText(!expandText)}><Text style={{fontFamily:'Poppins-Regular', color:'#407CE2'}}>{expandText ? 'Read Less' : 'Read More'}</Text></TouchableOpacity>
        </View>
      </View>

      <FlatList horizontal showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.date}
      renderItem={({ item }) => (
        <TouchableOpacity style={[styles.card2, {backgroundColor: item.date === selectedDate ? '#407CE2': '#f5f5f5'}]} onPress={() => handleSelectDate(item.date)}>
          <Text style={[styles.day, {color: item.date === selectedDate ? 'white': 'black'}]}>{item.day.slice(0,3)}</Text>
          <Text style={[styles.date, {color: item.date === selectedDate ? 'white' : 'black'}]}>{item.date}</Text>
          {/* {item.slots.map((slot, index) => (
            <Text key={index} style={styles.slot}>{slot}</Text>
            ))} */}
            {/*  */}
        </TouchableOpacity>
      )}
    />
    <View style={{height:1, backgroundColor:'lightgray'}}></View>
    <View style={styles.slotsContainer}>
        {slots.map((slot, index) => (
                <TouchableOpacity onPress={() => handleSlot(slot)} key={index}><Text style={[styles.slot, {backgroundColor: slot === selectedtime ? '#407CE2' : 'white', color: slot === selectedtime ? 'white' : 'black'}]}>{slot}</Text></TouchableOpacity>
        ))} 
    </View>
    <View>
      <TouchableOpacity onPress={handleBooking} style={styles.signBtn}><Text style={{textAlign:'center', color:'#407CE2', color:'white', fontWeight:'600', fontSize:18, fontFamily:'Poppins-SemiBold'}}>Book Appointment</Text></TouchableOpacity>
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 30,
    backgroundColor:'white',
    height:'100%'
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginBottom: 20,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  specialty: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: 'gray',
  },
  address: {
    fontFamily: 'Poppins-Regular',
    color: 'gray',
  },
  card2: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    marginBottom: 12,
    borderWidth:1,
    borderColor: 'lightgray',
    marginRight:10,
    height:100,
    width:68,
    marginTop:20
  },
  date: {
    // fontWeight: 'bold',
    marginBottom: 8,
    fontFamily:'Poppins-Bold',
    fontSize:18,
    textAlign:'center'
  },
  slot: {
    paddingVertical: 8,
    fontSize: 14,
    borderWidth:1,
    borderColor:'lightgray',
    // padding:10,
    height:40,
    width:100,
    borderRadius:16,
    margin:5,
    fontFamily:'Poppins-Regular',
    textAlign:'center'
  },
  day:{
    fontFamily:'Poppins-Regular',
    textAlign:'center'
  },
  slotsContainer:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    marginVertical:20,
    marginBottom:100
  },
  signBtn:{
    backgroundColor:'#407CE2',
    color:'white',
    padding:15,
    borderRadius:100,
    marginTop:10
  },
  top:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }
});

export default Doctordetails;
