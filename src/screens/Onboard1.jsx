import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
const Onboard1 = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <Text style={styles.skip}>Skip</Text>
      <View style={styles.image}>
        <Image source={require('../assets/On1.png')}/>
      </View>
      <Text style={styles.title}>Find a lot of specialist doctors in one place</Text>
      <View style={styles.bottomBtn}>
        <Image source={require('../assets/icon1.png')}/>
        <TouchableOpacity style={styles.nextIcon} onPress={() => navigation.navigate("Onboard2")}>
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
    // fontWeight:'',
    fontSize:26,
    marginTop:30,
    fontFamily:'Poppins-Bold'
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

export default Onboard1