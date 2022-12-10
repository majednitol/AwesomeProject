import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const FlexConcept = () => {
    return (
        <View style={style.prent}>
            <Text style={[style.child, style.child1]}>box1</Text>
            <Text style={[style.child, style.child2]}>box2</Text>
            <Text style={[style.child, style.child3]}>box3</Text>
            <Text style={[style.child, style.child4]}>box4</Text>
        </View>
    )
}
const style = StyleSheet.create({
    prent: {
        // flexDirection: "row-reverse",
        justifyContent: "space-around",
        height: 600,
        width: 390,
        margin: 5,
        alignItems: "stretch",

        borderWidth: 4


    },
    child: {

        height: 70,
        // width: 70,
        margin: 10,
        textAlign: "center",
        color: "white",
    },
    child1: {
        backgroundColor: "red",
        // alignSelf: "flex-end"
    },
    child2: { backgroundColor: "blue", },
    child3: { backgroundColor: "tomato", },
    child4: { backgroundColor: "black", },
})
export default FlexConcept