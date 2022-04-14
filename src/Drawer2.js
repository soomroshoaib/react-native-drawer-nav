
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Setting from './Setting'




const Drawer = createDrawerNavigator();

export default function Drawer2() {
  return (
    <Drawer.Navigator>
        {/* <Drawer.Screen name="Home" component={Home} 
       options={{drawerIcon: () => <IoniconsContainer name="home" /> }}   /> */}
      <Drawer.Screen name="About" component={About} 
       options={{drawerIcon: () => <IoniconsContainer name="home" /> }}   />
      {/* <Drawer.Screen name="Contact" component={Contact}   />
      <Drawer.Screen name="Setting" component={Setting} 
       options={{drawerIcon:()=> <IoniconsContainer name='settings' /> }}  /> */}
    </Drawer.Navigator>
  )
}

const IoniconsContainer = (props) =>{
  return <Ionicons name={props.name} size={30} />
}