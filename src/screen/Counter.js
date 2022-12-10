import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <View  >
            <Text style={style.text}>{counter}</Text>
            <View style={style.a}>
                <TouchableOpacity onPress={() => {
                    setCounter(counter + 10)
                }}>
                    <Text style={style.btn}>Incement</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    if (counter > 0) {
                        setCounter(0)
                    }
                }}>
                    <Text style={style.btn}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    if (counter > 0) {
                        setCounter(counter - 10)
                    }
                }}>
                    <Text style={style.btn}>Decement</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    text: {
        fontSize: 50,
        fontWeight: "900",
        textAlign: "center",
        marginTop: 20
    },
    btn: {

        color: "white",
        backgroundColor: "black",
        width: 90,
        paddingVertical: 15,
        paddingHorizontal: 10,
        fontWeight: "bold",

    },
    a: {
        flexDirection: "row",
        justifyContent: "space-around",

        marginTop: 50

    }
})
export default Counter