import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Onboard3 = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View>
          <Image source={require('../assets/logo.png')}/>
      </View>
      <Text style={styles.title}>Let’s get started!</Text>
      <Text style={styles.descr}>Login to Stay healthy and fit </Text>

      <View style={styles.btnn}>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}><Text style={{textAlign:'center', color:'white', fontFamily:'Poppins-SemiBold'}}>Login</Text></TouchableOpacity>
        <TouchableOpacity style={styles.signBtn} onPress={() => navigation.navigate('SignUp')}><Text style={{textAlign:'center', color:'#407CE2',fontFamily:'Poppins-SemiBold'}}>Signup</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    padding:30,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100%'
  },
  title:{
    fontSize:23,
    // fontWeight:'bold',
    
    fontFamily:'Poppins-Bold',
    marginTop:20,
    marginBottom:5
  },
  descr:{
    color:'#A1A8B0',
    fontSize:18,
    
    fontFamily:'Poppins-Regular'
  },
  loginBtn:{
    backgroundColor:'#407CE2',
    width:250,
    padding:15,
    borderRadius:100
  },
  signBtn:{
    borderColor:'#407CE2',
    borderWidth:1,
    width:250,
    padding:15,
    borderRadius:100,
    marginTop:10
  },
  btnn:{
    marginTop:30
  }
})

export default Onboard3