import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

import Icon from 'react-native-vector-icons/Fontisto'
const likeScreen = () => {
    const likeItems = useSelector((state) => state.like.likeProducts);
    console.log(likeItems)
  return (
    <View style={styles.main}>
        <Text style={{fontFamily:"Poppins-Bold", textAlign:'center', fontSize:22, marginBottom:10}}>Favorite Items</Text>
      <FlatList data={likeItems} renderItem={({item}) => <View style={styles.card}>
              <Image source={{uri:item.image}} width={100} height={100} style={{borderRadius:10}}/>
              <View style={{ width:'60%'}}>
                <Text style={{fontFamily:'Poppins-SemiBold', fontSize:14, width:'96%'}}>{item.title}</Text>
                <Text style={{fontFamily:'Poppins-Regular', color:'gray'}}>{item.dateCreated}   {item.readTime}</Text>
              </View>
              <TouchableOpacity>
                <Icon style={{fontSize:28, marginTop: -50, color:'blue'}} name="favorite"></Icon>
              </TouchableOpacity>
            </View>}
            ListEmptyComponent={<Text style={{fontFamily:'Poppins-Regular', textAlign:'center', fontSize:20, color:'gray'}}>No Like Items.</Text>}/>
    </View>
  )
}
const styles = StyleSheet.create({
    main:{
        marginTop:30,
        paddingHorizontal:30
    },
    card:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      gap:10,
      borderWidth:1,
      borderColor:'lightgray',
      marginBottom:10,
      padding:10,
      borderRadius:10,
      width:'100%'
    }
})
export default likeScreen