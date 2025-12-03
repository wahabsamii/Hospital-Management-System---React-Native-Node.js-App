import { View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/userSlice/userSlice'
const LoginScreen = () => {
    const [checked, setChecked] = useState(false);
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showpassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const handleLogin = async() => {
        try {
          const res = await axios.post('https://rms-backend-plum.vercel.app/api/auth/login', { email,password});
          ToastAndroid.show('Login Success', ToastAndroid.SHORT);
          console.log(res.data.user);
          dispatch(signInSuccess(res.data.user))
          
          navigation.navigate('Landing');
        } catch (error) {
          ToastAndroid.show(error, ToastAndroid.SHORT)
        }
      }
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Login</Text>
      <View>
            <View style={styles.input}>
                <Icon2 name="mail-outline" style={{fontSize:18}}/>
                <TextInput onChangeText={setEmail} placeholder='Enter your mail'/>
            </View>
            <View style={styles.input2}>
                <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:5}}>
                <Icon2 name="lock-open-outline" style={{fontSize:18}}/>
                <TextInput onChangeText={setPassword} placeholder='Enter your password' secureTextEntry={showpassword ? false : true}/>
                </View>
                <TouchableOpacity onPress={() => setShowPassword(!showpassword)}><Icon name={showpassword ? "eye" : "eye-off"} style={{fontSize:18}}/></TouchableOpacity>
            </View>

            <View style={{marginTop:20}}>
              <Text style={{textAlign:'right', fontFamily:'Poppins-Regular', color:'#407CE2'}}>Forgot Password?</Text>
            </View>
      </View>

    <View style={styles.bottomCol}>
        <TouchableOpacity style={styles.signBtn} onPress={handleLogin}><Text style={{textAlign:'center', color:'#407CE2', color:'white', 
        fontFamily:'Poppins-SemiBold', fontSize:18}}>Login</Text></TouchableOpacity>
        <Text style={{textAlign:'center', marginTop:10, 
        fontFamily:'Poppins-Regular'}}>Don't have an account? <Text style={{color:'#407CE2', fontFamily:'Poppins-SemiBold'}}>Sign up</Text></Text>    
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    main:{
        padding:30,
        position:'relative',
        backgroundColor:'white', height:'100%'
    },
    title:{
        textAlign:'center',
        // fontWeight:'800',
        fontSize:30,
        fontFamily:'Poppins-Bold'
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
    },
    input2:{
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
        marginTop:10,
        justifyContent:'space-between'
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
    },
    signBtn:{
        backgroundColor:'#407CE2',
        color:'white',
        padding:15,
        borderRadius:100,
        marginTop:10,
      },
      bottomCol:{
        marginTop:30,
      }
})
export default LoginScreen