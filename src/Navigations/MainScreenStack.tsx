import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import MainScreen from '../Screens/MainScreen';
import HomeScreen from '../Screens/HomeScreen';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();
const MainScreenStackNavigation = () => {
  return (

     <Stack.Navigator  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="BottomTabs" component={BottomTabs}/>
    </Stack.Navigator>
 
  )
}

export default MainScreenStackNavigation