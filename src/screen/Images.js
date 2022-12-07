import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const Images = () => {
  return (
      <View style={image.imgg}>
      <Text>this is image</Text>
      <Image style={image.imgg} source={'../../assets/favicon.png'  }/>
    </View>
  )
}
const image = StyleSheet.create({
    imgg: {
    
    width: 200,
        height: 200,
    }
})

 export default Images