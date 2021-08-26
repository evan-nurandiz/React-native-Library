import React from 'react'
import { View, Text, Image } from 'react-native'

const index = (props) => {
    return (
        <View>
            <View style={{ paddingVertical: 10, alignItems: 'center' }}>
                <Text>{props.title}</Text>
            </View>
            <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between', justifyContent: 'center', }}>
                <Text style={{ fontSize: 20 }}>{props.section}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image source={require('../../images/borrow/sad.png')} style={{ height: 200, width: 200 }} />
            </View>
        </View>
    )
}

export default index
