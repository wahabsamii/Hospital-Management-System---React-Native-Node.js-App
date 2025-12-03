import { View, Text } from 'react-native'
import React from 'react'
import SplachScreen from './src/screens/SplachScreen'
import Onboard1 from './src/screens/Onboard1'
import Onboard2 from './src/screens/Onboard2'
import Onboard3 from './src/screens/Onboard3'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from './src/screens/Signup'
import HomeScreen from './src/screens/HomeScreen'
import bottomNavigation from './src/navigations/bottomNavigation'
import AllDoctors from './src/screens/AllDoctors'
import DoctorDetails from './src/screens/DoctorDetails'
import Pharmacy from './src/screens/Pharmacy'
import ProductDetails from './src/screens/ProductDetails'
import LoginScreen from './src/screens/LoginScreen'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import likeScreen from './src/screens/likeScreen'
import Faqs from './src/screens/Faqs'
import UserAppointment from './src/screens/UserAppointment'
import AmbulanceScreen from './src/screens/AmbulanceScreen'
import SearchScreen from './src/screens/SearchScreen'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='Splash' component={SplachScreen}/>
          <Stack.Screen name='Onboard1' component={Onboard1}/>
          <Stack.Screen name='Onboard2' component={Onboard2}/>
          <Stack.Screen name='Onboard3' component={Onboard3}/>
          <Stack.Screen name='SignUp' component={Signup}/>
          <Stack.Screen name='Login' component={LoginScreen}/>
          <Stack.Screen name='Landing' component={bottomNavigation}/>
          <Stack.Screen name='AllDoctors' component={AllDoctors}/>
          <Stack.Screen name='Doctordetails' component={DoctorDetails}/>
          <Stack.Screen name='Pharmacy' component={Pharmacy}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails}/>
          <Stack.Screen name='Like' component={likeScreen}/>
          <Stack.Screen name='FAQS' component={Faqs}/>
          <Stack.Screen name='UserBooking' component={UserAppointment}/>
          <Stack.Screen name='Ambulance' component={AmbulanceScreen}/>
          <Stack.Screen name='SearchResults' component={SearchScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App