import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
const Onboard2 = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <Text style={styles.skip}>Skip</Text>
      <View style={styles.image}>
        <Image source={require('../assets/On2.png')}/>
      </View>
      <Text style={styles.title}>Get advice only from a doctor you believe in.</Text>
      <View style={styles.bottomBtn}>
        <Image source={require('../assets/icon2.png')}/>
        <TouchableOpacity style={styles.nextIcon}  onPress={() => navigation.navigate("Onboard3")}>
            <Icon style={{color:'white'}} name="arrowright"></Icon>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    padding:30
  },
  skip:{
    textAlign:'right',
    color:'#A1A8B0'
  },
  image:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:40
  },
  title:{
    // fontWeight:'bold',
    
    fontFamily:'Poppins-Bold',
    fontSize:26,
    marginTop:30
  },
  nextIcon:{
    backgroundColor:'#407CE2',
    width:50,
    height:50,
    borderRadius:100,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  bottomBtn:{
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'
  }
})

export default Onboard2