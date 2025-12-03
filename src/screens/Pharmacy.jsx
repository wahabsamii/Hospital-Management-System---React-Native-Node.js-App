import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import PoppularProduct from '../components/PoppularProduct'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
const Pharmacy = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.main}>
      {/* <Text style={styles.title}>Pharmacy</Text> */}
       <View style={styles.top}>
               <TouchableOpacity onPress={() => navigation.navigate('Landing')}><Icon style={{fontSize:23}}  name="arrow-back-ios-new"/></TouchableOpacity>
                 <Text style={styles.title}>Pharmacy</Text>
                 <Text></Text>
             </View>
      <Search />
      <View style={styles.banner}>
            <View>
                <Text style={styles.panantit}>Order Quickly with</Text>
                <Text style={styles.panantit}>Prescription</Text>
                <TouchableOpacity style={styles.panabutton}>
                    <Text style={{color:'white', fontFamily:'Poppins-SemiBold', textAlign:'center'}}>Upload Prescription</Text>
                </TouchableOpacity>
            </View>
            <Image source={require('../assets/panan.png')} />
      </View>

      <View style={{marginBottom:40}}>
      <PoppularProduct />
      <PoppularProduct />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize:22,
        textAlign:'center',
        fontFamily:'Poppins-SemiBold',
        marginBottom:20
    },
    main:{
        padding:30,
        backgroundColor:'white',
        // marginBottom:20
    },
    banner:{
        backgroundColor:'#d5ecf3',
        padding:20,
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,

    },
    panantit:{
      fontSize:20,
      fontFamily:'Poppins-SemiBold'
    },
    panabutton:{
      backgroundColor:'#407CE2',
      marginTop:10,
      padding:8,
      borderRadius:10,
      width:'85%'
    },
    top:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
    }
})
export default Pharmacy