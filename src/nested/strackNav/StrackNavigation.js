import 'react-native-gesture-handler'
import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Drawer2 from '../../Drawer2'
import Toptaber from '../../Toptaber'
import SplashScreen from '../../SplashScreen'; 
import LoginScreen from '../../Login';
import SignupScreen from '../../Signup'




const Stack = createNativeStackNavigator();

export default function StrackNavigation() {
    const [Screen, setScreen] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setScreen(false)

    }, 4000)
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator>
    
      {
        Screen ? (
          <Stack.Screen
       name="SplashScreen" 
       component={SplashScreen}
        options={{headerShown:false}} />
        
        ):[null]
      }
  

      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        //  options={{headerShown:false}}
          />

      {/*  */}

      <Stack.Screen 
        name="Signup" 
        component={SignupScreen} 
        // options={{headerShown:false}}
         />

      {/*  */}
      {/*  */}
        <Stack.Screen 
        name="Home" 
        component={Drawer2} 
         options={{headerShown:false}} 

        />
         <Stack.Screen 
        name="Home" 
        component={Toptaber} 
         options={{headerShown:false}} 

        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}