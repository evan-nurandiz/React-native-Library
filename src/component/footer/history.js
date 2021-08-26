import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const footer = (props) => {
    return (
        props.refresh ?
            <View  >
                <ActivityIndicator size="large" />
            </View> : <View style={{ marginTop: 80 }}></View>
    )
}

export default footer



