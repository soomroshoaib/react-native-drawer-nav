
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import StrackNavigation from '../strackNav/StrackNavigation'





const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator>
      
      <Drawer.Screen name="StrackNavigation" component={StrackNavigation} 
      //  options={{drawerIcon: () => <IoniconsContainer name="home" /> }}
          />
     
    </Drawer.Navigator>
  )
}

// const IoniconsContainer = (props) =>{
//   return <Ionicons name={props.name} size={30} />
// }