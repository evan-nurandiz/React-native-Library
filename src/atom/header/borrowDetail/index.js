import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const index = (props) => {
    return (
        <View style={Styles.HeaderContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                <TouchableOpacity onPress={props.page}>
                    <Image source={require('../../../images/Navbar/back.png')} style={{ width: 30, height: 30, tintColor: '#50C878', marginTop: 5 }} />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 28, textAlign: "center" }}>Borrow</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 28, textAlign: "center" }}></Text>
                </View>
            </View>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                alignItems: 'flex-start', marginTop: 20
            }}>
                <View>
                    <Text style={Styles.headFont}>Borrow Date</Text>
                    <Text style={Styles.dateFont}>{props.borrow_date}</Text>
                </View>
                {
                    props.return_by_date ?
                        <View>
                            <Text style={Styles.headFont}>Return By Date</Text>
                            <Text style={Styles.dateFont}>{props.return_by_date}</Text>
                        </View> :
                        <View>
                            <Text style={Styles.headFont}>Return Date</Text>
                            <Text style={Styles.dateFont}>{props.return_date}</Text>
                        </View>
                }
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    HeaderContainer: {
        fontSize: 30,
        flex: 2,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#F0F3F7'
    },
    headFont: {
        color: '#BEBCBC',
        fontSize: 22
    },
    dateFont: {
        fontSize: 20
    },
})

export default index
