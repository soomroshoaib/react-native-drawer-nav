import { View, Text , StyleSheet, Image, StatusBar} from 'react-native'
import React, {useState, useEffect} from 'react'
import logo from './asset/image/logo2.jpg'

export default function SplashScreen() {
  
  return (
    <View style={styles.container}>
    <StatusBar hidden={true} />
    <View></View>
    <View style={styles.logoContainer}>
      <Image source={logo} />
      <Text style={styles.text}>: Shoaib Soomro :</Text>
    </View>

    <View style={styles.Buttomconatiner}>
      <Text style={styles.Buttomtext}>
        Made with from pakistan
      </Text>
    </View>
   
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#000",
        flex: 1,
        justifyContent:'space-around',
        alignItems:'center',
        color:'white'
    },
    logoContainer: {
      
      textAlign:'center'
    },
    logo: {
      height: 200,
      width: 200
    },
    text:{
      color:'#fff',
    textAlign:'center',
    marginTop:20
    },
    Buttomconatiner: {

    },
    Buttomtext: {
      color:'#fff'

    }
})