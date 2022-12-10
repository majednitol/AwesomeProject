import React from 'react'
import { Alert, Button, Text, TouchableOpacity, View } from 'react-native'

const TouchAbleOpacity = () => {
    return (
        <View>
            <Button title='login' color={"red"} onPress={() => {
                console.log("button pressed");
            }} />
            <TouchableOpacity onPress={() => {
                console.log("object");
                Alert.alert("object")
            }}>
                <Text>
                    TouchableOpacity

                </Text>
            </TouchableOpacity>
            
        </View>
        
    )
}

export default TouchAbleOpacity