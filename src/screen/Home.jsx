import React from 'react'
import { StyleSheet, View } from 'react-native'

const Home = () => {
  return (
      <View>
          <Text style={home.textone}>
              hello world
          </Text>

          <Text style={home.texttwo} >
              i am majed
          </Text>
    </View>
  )
}

const home = StyleSheet.create({
    textone: {
        color: "white",
        fontSize: 40,
        backgroundColor: "red",
        fontWeight:"bold"
    },
    texttwo: {
        fontSize: 40,
        backgroundColor: "green",
        fontWeight:"bold"
    }
});

export default Home

