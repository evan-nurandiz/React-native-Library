import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import Logo from '../../images/Home/vektor_1.png'
import Profile from '../../images/Home/profile-men.png'

const Home = (props) => {
    return (
        <View>
            <View>
                <View style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    backgroundColor: "white",
                    paddingVertical: 20,
                    paddingHorizontal: 20,
                    borderBottomStartRadius: 25,
                    borderBottomEndRadius: 25,
                    elevation: 5,
                    height: '100%'
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                        <Text style={{ color: 'black', marginTop: 60, fontSize: 20 }}>{props.time}</Text>
                        <View style={{ width: 180, height: 150, padding: 15 }}>
                            <Image source={Logo} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
                        </View>

                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 5
                    }}>
                        <View style={{ width: 150, height: 150, padding: 15 }}>
                            <Image source={Profile} style={{ width: '100 %', height: '100%', padding: 15, borderRadius: 10, flex: 1 / 2, }} />
                        </View>
                        <View style={{ flexDirection: 'column', flex: 1, paddingVertical: 10 }}>
                            <Text numberOfLines={1} style={{ color: 'black', fontSize: 18, textAlign: 'center' }} >{props.information.name}</Text>
                            <Text style={{ color: 'black', fontSize: 18, textAlign: 'center', marginTop: 5 }}>{props.information.nim}</Text>
                            <Text style={{ color: 'black', fontSize: 18, textAlign: 'center', marginTop: 5 }}>{props.information.major} - {props.information.class}</Text>
                        </View>
                    </View>
                </View>
            </View>


        </View>
    )
}



export default Home;