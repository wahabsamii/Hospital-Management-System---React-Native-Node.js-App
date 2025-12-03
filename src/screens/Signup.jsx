import { View, Text, StyleSheet,ToastAndroid, TextInput, Pressable, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
const Signup = () => {
    const [checked, setChecked] = useState(false);
    const navigation = useNavigation();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = async() => {
      try {
        const res = await axios.post('https://rms-backend-plum.vercel.app/api/auth/register', {name, email,password});
        
        ToastAndroid.show('Account Created', ToastAndroid.SHORT);
        navigation.navigate('Login');
      } catch (error) {
        
      }
    }
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Signup</Text>
      <View>
            <View style={styles.input}>
                <Icon name="user"/>
                <TextInput onChangeText={setName} placeholder='Enter your name'/>
            </View>
            <View style={styles.input}>
                <Icon2 name="mail-outline"/>
                <TextInput onChangeText={setEmail} placeholder='Enter your mail'/>
            </View>
            <View style={styles.input}>
                <Icon2 name="lock-open-outline"/>
                <TextInput onChangeText={setPassword} placeholder='Enter your password'/>
            </View>

            <View style={{marginTop:20}}>
            <Pressable
        onPress={() => setChecked(!checked)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            height: 24,
            width: 24,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#333',
            backgroundColor: checked ? '#007AFF' : 'white',
            marginRight: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {checked && <Text style={{ color: 'white' }}>✔</Text>}
        </View>
        <Text>I agree to the healthcare Terms of Service and Privacy Policy</Text>
      </Pressable>
            </View>
      </View>

    <View style={styles.bottomCol}>
        <TouchableOpacity style={styles.signBtn} onPress={handleSignUp}><Text style={{textAlign:'center', color:'#407CE2', color:'white', fontWeight:'600', fontSize:18}}>Signup</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={{textAlign:'center', marginTop:10}}><Text style={{textAlign:"center"}}>Already have an Account? Login</Text></TouchableOpacity>    
    </View> 
    </View>
  )
}
const styles = StyleSheet.create({
    main:{
        padding:30,
        position:'relative'
    },
    title:{
        textAlign:'center',
        fontWeight:'800',
        fontSize:20
    },
    input:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#F9FAFB',
        alignItems:'center',
        paddingHorizontal:15,
        paddingVertical:5,
        gap:10,
        borderColor:'gray',
        borderWidth:1,
        borderRadius:10,
        marginTop:10
    },signBtn:{
        backgroundColor:'#407CE2',
        color:'white',
        borderWidth:1,
        padding:15,
        borderRadius:100,
        marginTop:10
      },
      bottomCol:{
        marginTop:400,
      }
})
export default Signup