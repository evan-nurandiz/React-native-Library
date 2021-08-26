import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import BookOne from '../../images/Home/book1.jpg'
import BookTwo from '../../images/Home/book3.jpg'
import { useNavigation } from '@react-navigation/native';

const index = () => {

    const navigation = useNavigation()

    return (
        <View style={Styles.container}>
            <View>
                <Text style={{ textAlign: 'center', fontSize: 20 }}>DISCOVER BOOK</Text>
            </View>
            <View style={{ marginTop: 20, flexDirection: 'row', marginRight: 15 }}>
                <ScrollView horizontal={true}>
                    <View style={{ flexDirection: 'column', marginRight: 10 }}>
                        <TouchableOpacity style={{ width: 132, height: 187 }} onPress={() => navigation.navigate('Book')}>
                            <Image source={BookOne} style={{ height: '100%', width: '100%', borderRadius: 25 }} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>Nora Berret</Text>
                            <Text>Amara The Brave</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', marginRight: 10 }}>
                        <TouchableOpacity style={{ width: 132, height: 187 }} >
                            <Image source={BookTwo} style={{ height: '100%', width: '100%', borderRadius: 25 }} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>Nora Berret</Text>
                            <Text>Amara The Brave</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', marginRight: 10 }}>
                        <TouchableOpacity style={{ width: 132, height: 187 }}>
                            <Image source={BookOne} style={{ height: '100%', width: '100%', borderRadius: 25 }} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>Nora Berret</Text>
                            <Text>Amara The Brave</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '80%',
        paddingVertical: 10,
        marginLeft: 50,
        paddingLeft: 20,
        borderTopStartRadius: 25,
        borderBottomStartRadius: 25,
        flexDirection: 'column',
        elevation: 5,
    }
})

export default index
