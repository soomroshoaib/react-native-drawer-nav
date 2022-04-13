import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

export default function Setting() {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Setting</Text>
      <TouchableOpacity onPress={()=>{ navigation.navigate('About')}}>
        <Text>About</Text>
      </TouchableOpacity>

    </View>
  )
}