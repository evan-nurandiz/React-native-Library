import React from 'react'
import { View, Text, TouchableOpacity, Button, } from 'react-native';

const index = ({ onLogout }) => {
    return (
        <View style={{
            flex: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10
        }} >

            <Text style={{ fontSize: 25 }}>Profile</Text>
            <TouchableOpacity onPress={onLogout}>
                <Text style={{ fontSize: 25 }}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default index
