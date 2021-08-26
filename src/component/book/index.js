import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image'

const index = (props) => {
    const [stock, setStock] = useState('')

    useEffect(() => {
        if (props.stock > 0) {
            setStock('avaible')
        } else {
            setStock('empty')
        }
    }, [])

    return (
        <View style={{
            backgroundColor: 'white', flex: 1,
            flexDirection: 'column',
            backgroundColor: '#ECECEC',
        }}>
            <View style={{ flex: 2, backgroundColor: "#F0F3F7", padding: 20 }}>
                <TouchableOpacity onPress={props.page}>
                    <Image source={require('../../images/Navbar/back.png')} style={{ width: 35, height: 35, tintColor: '#50C878' }} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 3, borderTopEndRadius: 25, borderTopStartRadius: 25, elevation: 1 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -150 }}>
                    <FastImage source={{ uri: `${props.image}` }} style={{ width: 168, height: 268, borderRadius: 25 }} />
                </View>
                <ScrollView>
                    <View style={{ marginTop: 20, backgroundColor: '#ECECEC' }}>
                        <Text style={{ textAlign: 'center', fontSize: 24, color: '#BEBCBC' }}>{props.writter}</Text>
                        <Text style={{ textAlign: 'center', fontSize: 24 }}>{props.title}</Text>
                    </View>
                    <View style={{ marginTop: 30, backgroundColor: '#FFFFFF', elevation: 3, paddingTop: 20 }}>
                        <Text style={{ textAlign: 'center', fontSize: 26, color: 'black' }}>About Book</Text>
                        <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
                            <View style={{
                                backgroundColor: '#ECECEC', flexDirection: 'row',
                                justifyContent: 'space-between', borderRadius: 25,
                                height: 110, alignItems: 'center',
                            }}>
                                <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 20, color: '#BEBCBC', paddingHorizontal: 10 }}>Release</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 20, color: 'black', paddingHorizontal: 10 }}>{props.release}</Text>
                                </View>
                                <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 20, color: '#BEBCBC', paddingHorizontal: 10 }}>Languague</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 20, color: 'black', paddingHorizontal: 10 }}>English</Text>
                                </View>
                                <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 20, color: '#BEBCBC', paddingHorizontal: 10 }}>Stock</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 20, color: 'black', paddingHorizontal: 10 }}>{stock}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column', marginTop: 20 }}>
                                <Text style={{ fontSize: 20, color: '#BEBCBC', paddingHorizontal: 10 }}>Description</Text>
                                <Text style={{ fontSize: 20, color: 'black', paddingHorizontal: 10 }}>
                                    {props.description}
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View >
    )
}

export default index
