import 'react-native-gesture-handler'
import React, {useState, useEffect} from 'react'
//import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopbarNav from './TopbarNav'
import SplashScreen from './SplashScreen'
// import Home from './Home'




const Stack = createNativeStackNavigator();

function App() {
  const [Screen, setScreen] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setScreen(false)

    }, 4000)
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/*  */}
      {
        Screen ? (
          <Stack.Screen
       name="SplashScreen" 
       component={SplashScreen}
        options={{headerShown:false}} />
        
        ):[null]
      }
     

      {/*  */}
        <Stack.Screen name="TopbarNav" component={TopbarNav} options={{headerShown:false}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;