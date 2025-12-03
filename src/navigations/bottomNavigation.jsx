import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/Octicons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/MaterialIcons'
import Icon4 from 'react-native-vector-icons/FontAwesome'
import Icon6 from 'react-native-vector-icons/Feather'
import Reports from '../screens/Reports';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import AddDoctorScreen from '../screens/Admin/AddDoctor';
import AddPharmacy from '../screens/Admin/AddPharmacy';
import CartScreen from '../screens/CartScreen';
const bottomNavigation = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name='Home' component={HomeScreen} options={{tabBarIcon:({size,color}) => <Icon color={color} size={size} name="home" />}}/>
        <Tab.Screen name='Reports' component={Reports} options={{tabBarIcon:({size,color}) => <Icon2 color={color} size={size} name="filetext1" />}} />
        <Tab.Screen name='Notifications' component={Notifications} options={{tabBarIcon:({size,color}) => <Icon3 color={color} size={size} name="notifications-none" />}} />
        <Tab.Screen name='Cart' component={CartScreen} options={{tabBarIcon:({size,color}) => <Icon6 color={color} size={size} name="shopping-bag" />}} />
        <Tab.Screen name='Profile' component={Profile}  options={{tabBarIcon:({size,color}) => <Icon4 color={color} size={size} name="user-o" />}}/>

    </Tab.Navigator>
  )
}

export default bottomNavigation