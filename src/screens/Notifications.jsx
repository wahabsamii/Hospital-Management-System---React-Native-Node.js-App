import { View, Text, Image } from 'react-native'
import React from 'react'

const Notifications = () => {
  return (
    <View style={{backgroundColor:'white', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Image source={require('../assets/noti.png')}/>
    </View>
  )
}

export default Notifications