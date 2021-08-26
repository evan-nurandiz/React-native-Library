import React, { useState } from 'react'
import { View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const search = (props) => {
    const [key, setKey] = useState("")

    const onSubmit = (event) => {
        console.log(key)
        event.persist()
        props.Page(key)
    }

    return (
        <View style={Styles.navBox}>
            <TextInput style={Styles.textInput} placeholder="Search Book" onChangeText={key => setKey(key)} />
            <TouchableOpacity style={Styles.searchContainer} onPress={onSubmit}>
                <Image source={require('../../images/Navbar/search.png')} style={{ width: 30, height: 30, tintColor: 'white' }} />
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    navBox: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 15,
    },
    textInput: {
        width: "80%",
        borderColor: '#465881',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        height: 60,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    searchContainer: {
        width: '15%',
        backgroundColor: 'black',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -20,
        borderRadius: 10,
    }
})

export default search
