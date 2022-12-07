import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

const FlatListDemo = () => {
    const data = [
        {
            key: "1",
            name: 'majed'
        }, {
            key: "2",
            name: 'majed1'
        }, {
            key: "3",
            name: 'majed2'
        }, {
            key: "4",
            name: 'majed3'
        }, {
            key: "5",
            name: 'majed4'
        }, {
            key: "6",
            name: 'majed5'
        }, {
            key: "7",
            name: 'majed6'
        }, {
            key: "8",
            name: 'majed7'
        }, {
            key: "9",
            name: 'majed9'
        }, {
            key: "10",
            name: 'majed0'
        }, {
            key: "11",
            name: 'majed11'
        },
    ]
    return (
        <FlatList horizontal  inverted  showsHorizontalScrollIndicator={false} data={data} renderItem={((element) => {
            return <Text style={flatlist.text}>{element.item.name}</Text>
        })}>

        </FlatList>
    )
}
const flatlist = StyleSheet.create({
    text: {
        color: "red",
        fontSize: 30,
       
        backgroundColor: "blue",
        marginVertical: 190,
       marginHorizontal:19,
        paddingVertical: 15,
        
        paddingHorizontal: 20,
        textAlign: "center",
        width: 300,
        height:200
        
    }
})
export default FlatListDemo