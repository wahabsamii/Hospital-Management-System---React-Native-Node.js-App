import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const SplachScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate("Onboard1")
      }, 3000);
    })
  return (
    <View>
      <ImageBackground source={require('../assets/Splashbg.png')} style={styles.bg}>
          <Image source={require('../assets/logo.png')}/>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  bg:{
    width:'100%',
    height:'100%',
    objectFit:'cover',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
})
export default SplachScreen