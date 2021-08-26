import React from 'react'
import { View, Text, TouchableOpacity, Button, Image, } from 'react-native';

const index = (props) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            padding: 10,
        }} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={props.page}>
                    <Image source={require('../../../images/Navbar/back.png')} style={{ width: 35, height: 35, tintColor: '#50C878' }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 25 }}>Result</Text>
                <Text style={{ fontSize: 25 }}></Text>
            </View>
        </View >
    )
}

export default index
