import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import Icon from 'react-native-vector-icons/FontAwesome'
import HealthArticles from '../components/HealthArticles'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
const HomeScreen = () => {
    const navigation = useNavigation();
    const {currentUser} = useSelector((state) => state.user);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.Header}>
            <View style={styles.HeaderInner}>
                <Image source={{uri: currentUser.image}} style={styles.profImg}/>
                <Text style={{fontFamily:'Poppins-SemiBold', fontSize:16}}>welcome !</Text>
                <Text style={{fontFamily:'Poppins-SemiBold', fontSize:18}}>{currentUser.name} </Text>
                <Text style={{fontFamily:'Poppins-Regular', fontSize:14, color:'gray'}}>How is it going today ? </Text>
            </View>
            <View>
                <Image source={require('../assets/home.png')}/>
            </View>
      </View>

      <View style={styles.main}>
            <Search />

            {/* Threecol  */}
            <View style={styles.ThreeCols}>
                <TouchableOpacity  style={styles.innerIcon} onPress={() => navigation.navigate('AllDoctors')}>
                    <View style={styles.thIcon}><Icon style={{color:'white', fontSize: 19}} name="stethoscope"/></View>
                    <Text style={{textAlign:'center',fontFamily:'Poppins-Regular', marginTop:8}}>Top Doctors</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.innerIcon} onPress={() => navigation.navigate('Pharmacy')}>
                    <View style={styles.thIcon}><Icon style={{color:'white', fontSize: 19}} name="paperclip"/></View>
                    <Text style={{textAlign:'center',fontFamily:'Poppins-Regular', marginTop:8}}>Pharmacy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.innerIcon} onPress={() => navigation.navigate('Ambulance')}>
                    <View style={styles.thIcon}><Icon style={{color:'white', fontSize: 19}} name="ambulance"/></View>
                    <Text style={{textAlign:'center',fontFamily:'Poppins-Regular',marginTop:8}}>Ambulance</Text>
                </TouchableOpacity>
            </View>
         <HealthArticles />
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    Header:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#d5ecf3',
        paddingHorizontal:20,
        paddingTop:30
    },
    HeaderInner:{
        // display:'flex',
        // flexDirection:'row'
    },
    main:{
        backgroundColor:'white',
        padding:30,
        marginTop:-30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    thIcon:{
        backgroundColor:'#407CE2',
        width:50,
        height:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100
    },
    ThreeCols:{
        marginTop:30,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    innerIcon:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    profImg:{
        width:60,
        height:60,
        borderRadius:100,
        marginBottom:10
    }
})
export default HomeScreen