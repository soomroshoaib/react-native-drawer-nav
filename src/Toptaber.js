import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './Home'

import Setting from './Setting'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'
import Contact from './Contact';


const Tab = createMaterialBottomTabNavigator();
export default function Toptaber() {
  return (
    
      <Tab.Navigator activeColor='white' shifting='true'>
    <Tab.Screen name="Home" 
    component={Home}
     options={{tabBarIcon:()=> <IoniconsContainer name='home' /> , tabBarColor:'green', }} />

      <Tab.Screen name="Contact" component={Contact} options={{tabBarIcon:()=> <IoniconsContainer name='about' /> , tabBarColor:'green', }} />
      <Tab.Screen name="Settings" component={Setting}  options={{tabBarIcon:()=> <IoniconsContainer name='settings' /> , tabBarColor:'yellow',}}  />
    </Tab.Navigator>
    
  )
}

const IoniconsContainer = (props) =>{
  return <Ionicons name={props.name} size={20} color='black'  />
}