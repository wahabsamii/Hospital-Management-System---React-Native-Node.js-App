import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
import Icon5 from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { signOutSuccess } from '../redux/userSlice/userSlice'
const Profile = () => {
  const navigation = useNavigation();
  const {currentUser} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signOutSuccess());
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  
  return (
    <View style={styles.main}>
        <View style={styles.inner}>
          <Image source={{uri: currentUser.image}} style={styles.profImg}/>
          <Text style={{fontFamily:'Poppins-Bold', fontSize:20, marginTop:10}}>{currentUser.name}</Text>
          <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', gap:40, marginTop:15}}>
              <View>
                  <Icon style={{color:'#407BFF', fontSize:30, textAlign:'center'}} name="heartbeat"/>
                  <Text style={{fontFamily:'Poppins-Regular', textAlign:'center',color:'#407BFF',marginVertical:2}}>Heart Beat</Text>
                  <Text style={{fontFamily:'Poppins-SemiBold', color:'#407BFF', textAlign:'center', fontSize:20}}>215bpm</Text>
              </View>
              <View>
                  <Icon2 style={{color:'#407BFF', fontSize:30, textAlign:'center'}} name="flame-sharp"/>
                  <Text style={{fontFamily:'Poppins-Regular', textAlign:'center',color:'#407BFF',marginVertical:2}}>Calories</Text>
                  <Text style={{fontFamily:'Poppins-SemiBold', color:'#407BFF', textAlign:'center', fontSize:20}}>756cal</Text>
              </View>
              <View>
                  <Icon3 style={{color:'#407BFF', fontSize:30, textAlign:'center'}} name="weight"/>
                  <Text style={{fontFamily:'Poppins-Regular', textAlign:'center',color:'#407BFF',marginVertical:2}}>Weight</Text>
                  <Text style={{fontFamily:'Poppins-SemiBold', color:'#407BFF', textAlign:'center', fontSize:20}}>103lbs</Text>
              </View>
          </View>
        </View>

        <View style={styles.btoo}>
          <TouchableOpacity onPress={() => navigation.navigate('Like')} style={styles.listItem}>
            <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:20}}>
                <View style={styles.IconBg}>
                  <Icon style={{fontSize:25, color:'#407BFF'}} name="heart-o"></Icon>
                </View>
               <Text style={{fontFamily:'Poppins-SemiBold', fontSize:20}}>My Saved</Text>
            </View>
            <Icon style={{fontSize:24}} name="angle-right"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('UserBooking')}>
            <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:20}}>
                <View style={styles.IconBg}>
                  <Icon5 style={{fontSize:25, color:'#407BFF'}} name="carryout"></Icon5>
                </View>
               <Text style={{fontFamily:'Poppins-SemiBold', fontSize:20}}>appointments</Text>
            </View>
            <Icon style={{fontSize:24}} name="angle-right"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:20}}>
                <View style={styles.IconBg}>
                  <Icon4 style={{fontSize:25, color:'#407BFF'}} name="payment"></Icon4>
                </View>
               <Text style={{fontFamily:'Poppins-SemiBold', fontSize:20}}>Payment Method</Text>
            </View>
            <Icon style={{fontSize:24}} name="angle-right"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('FAQS')}>
            <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:20}}>
                <View style={styles.IconBg}>
                  <Icon5 style={{fontSize:25, color:'#407BFF'}} name="message1"></Icon5>
                </View>
               <Text style={{fontFamily:'Poppins-SemiBold', fontSize:20}}>FAQS</Text>
            </View>
            <Icon style={{fontSize:24}} name="angle-right"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem1} onPress={handleLogout}>
            <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:20}}>
                <View style={styles.IconBg}>
                  <Icon4 style={{fontSize:25, color:'#407BFF'}} name="logout"></Icon4>
                </View>
               <Text style={{fontFamily:'Poppins-SemiBold', fontSize:20}}>Logout</Text>
            </View>
            <Icon style={{fontSize:24}} name="angle-right"/>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    padding:30,
    backgroundColor:'white',
    height:'100%'
  },
  inner:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  btoo:{
    marginTop:30
  },
  listItem:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',alignItems:'center',
    // marginBottom:
    borderBottomWidth:1,
    borderBottomColor:'lightgray',
    paddingBottom:15,
    paddingTop:15
  },
  listItem1:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',alignItems:'center',
    // marginBottom:
    paddingBottom:15,
    paddingTop:15
  },
  IconBg:{
    backgroundColor:'#D3E3FF',
    width:50,
    height:50,
    borderRadius:100,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
},
profImg:{
  width:100,
  height:100,
  borderRadius:100
}
})
export default Profile