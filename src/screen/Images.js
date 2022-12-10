import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const Images = () => {
  return (
      <View style={image.imgg}>
      <Text>this is imagej</Text>
      <Image style={image.imgg} source={require('../../assets/favicon.png')  }/>
    </View>
  )
}
const image = StyleSheet.create({
    imgg: {
    margin:50,
    width: 200,
        height: 200,
    }
})

 export default Images