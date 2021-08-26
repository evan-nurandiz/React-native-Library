import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import HomeIcon from '../../images/Navbar/home.png'
import BookIcon from '../../images/Navbar/book.png'
import UserIcon from '../../images/Navbar/user.png'
import HistoryIcon from '../../images/Navbar/history.png'


const Navbar = () => {
    return (
        <View>
            <View style={{
                backgroundColor: "white",
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 25,
                paddingVertical: 15,
                elevation: 20
            }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 30, height: 30, }}>
                        <TouchableOpacity >
                            <Image source={HomeIcon} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                    </View>
                    <Text>HOME</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 30, height: 30, }}>
                        <TouchableOpacity title="BookList">
                            <Image source={BookIcon} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                    </View>
                    <Text>BOOK</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 30, height: 30, }}>
                        <TouchableOpacity title="BookList">
                            <Image source={HistoryIcon} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                    </View>
                    <Text>HISTORY</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 30, height: 30, }}>
                        <TouchableOpacity >
                            <Image source={UserIcon} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                    </View>
                    <Text>PROFILE</Text>
                </View>
            </View>
        </View >
    )
}



export default Navbar;