import React from 'react'
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from './Home'
import About from './About'
import Setting from './Setting'
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createMaterialTopTabNavigator();

function metarial() {
  return (
    
    <Tab.Navigator activeColor='white' shifting='true'>
    <Tab.Screen name="Home" component={Home} options={{tabBarIcon:()=> <IoniconsContainer name='home' /> , tabBarColor:'gray', }} />

      <Tab.Screen name="About" component={About} options={{tabBarIcon:()=> <IoniconsContainer name='About' /> , tabBarColor:'green', }} />
      <Tab.Screen name="Settings" component={Setting}  options={{tabBarIcon:()=> <IoniconsContainer name='settings' /> , tabBarColor:'yellow',}}  />
    </Tab.Navigator>
  );
} 

const IoniconsContainer = (props) =>{
    return <Ionicons name={props.name} size={20} color='black'  />
  }
export default metarial;