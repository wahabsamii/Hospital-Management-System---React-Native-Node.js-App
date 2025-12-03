import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Icon from 'react-native-vector-icons/Octicons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
const AllDoctors = () => {
    const [doctors, setdoctors] = useState([]);
    const navigation = useNavigation();
    const fetchAllDoctors = async () => {
        try {
            const res = await axios.get('https://rms-backend-plum.vercel.app/api/doctors/all');
            setdoctors(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllDoctors()
    }, [doctors])
    
  return (
    <View style={styles.main}>
         <View style={styles.top}>
                      <TouchableOpacity onPress={() => navigation.navigate('Landing')}><Icon2 style={{fontSize:23, marginTop:-5}}  name="arrow-back-ios-new"/></TouchableOpacity>
                        <Text style={{fontSize:25, fontFamily:'Poppins-SemiBold'}}>All Doctors</Text>
                        <Text></Text>
        </View>
      <FlatList data={doctors} renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('Doctordetails', {doctor: item})} style={styles.card}>
        <View>
            <Image source={{uri: item.image}} style={styles.img}/>
        </View>
        <View>
          <Text style={{fontFamily:'Poppins-SemiBold', fontSize:20}}>{item.name}</Text>
          <Text style={{fontFamily:'Poppins-Regular', fontSize:17, color:'gary'}}>{item.specialty}</Text>
          <Text style={{fontFamily:'Poppins-Regular', color:'gray'}}><Icon name="location"/> {item.address}</Text>
          {/* <Text>{item.name}</Text> */}
        </View>

        </TouchableOpacity>}/>
    </View>
  )
}
const styles = StyleSheet.create({
    main:{
        padding:30,
        backgroundColor:'white',
        height:'100%'
    },
    title1:{
        fontStyle:50,
        fontFamily:'Poppins-SemiBold',
        textAlign:'center'
    },
    img:{
        width:100,
        height:100,
        borderRadius:10
    },
    card:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        borderWidth:1,
        borderColor:'lightgray',
        borderRadius:10,
        padding:10,
        marginBottom:10
    },
    top:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20
      }
})
export default AllDoctors