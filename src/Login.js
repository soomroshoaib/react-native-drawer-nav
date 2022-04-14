import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation} from '@react-navigation/native'

export default function Login() {
    const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
      <Text>this is Login Screen </Text>
      <TouchableOpacity style={{backgroundColor:'gray', marginVertical:20, padding:20, }}>
          <Text onPress={()=> navigation.navigate('Home')}>
              Login
          </Text>
      </TouchableOpacity>

      <TouchableOpacity>
          <Text onPress={()=> navigation.navigate('Signup')}>
              New User Signup 
          </Text>
      </TouchableOpacity>
    </View>
  )
}