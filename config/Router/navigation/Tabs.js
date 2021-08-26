import React from 'react'
import HomeIcon from '../../../src/images/Navbar/home.png'
import BookIcon from '../../../src/images/Navbar/book.png'
import HistoryIcon from '../../../src/images/Navbar/history.png'
import ProfileIcon from '../../../src/images/Navbar/user.png'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { HomeStackScreen, BookStackScreen, HistoryStackScreen, ProfileScreen } from '../../Router/navigation/Stack'

const Tabs = createBottomTabNavigator()

const Tab = () => {
    return (
        <Tabs.Navigator tabBarOptions={{
            showLabel: false,
            style: {
                backgroundColor: "white",
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 0,
                paddingVertical: 5,
                elevation: 20,
                height: 60
            }
        }}>
            <Tabs.Screen name="Home" component={HomeStackScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: 30, height: 30, }}>
                            <Image source={HomeIcon} style={{ width: '100%', height: '100%', tintColor: focused ? '#50C878' : '#748c95' }} />
                        </View>
                        <Text style={{ color: focused ? '#1a396f' : '#ffffff' }}>HOME</Text>
                    </View>
                ),
            }} />
            <Tabs.Screen name="Book" component={BookStackScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: 30, height: 30, }}>
                            <Image source={BookIcon} style={{ width: '100%', height: '100%', tintColor: focused ? '#50C878' : '#748c95' }} />
                        </View>
                        <Text style={{ color: focused ? '#1a396f' : '#ffffff' }}>BOOK</Text>
                    </View>
                ),
            }} />
            <Tabs.Screen name="History" component={HistoryStackScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: 30, height: 30, }}>
                            <Image source={HistoryIcon} style={{ width: '100%', height: '100%', tintColor: focused ? '#50C878' : '#748c95' }} />
                        </View>
                        <Text style={{ color: focused ? '#1a396f' : '#ffffff' }}>HISTORY</Text>
                    </View>
                ),
            }} />
            <Tabs.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: 30, height: 30, }}>
                            <Image source={ProfileIcon} style={{ width: '100%', height: '100%', tintColor: focused ? '#50C878' : '#748c95' }} />
                        </View>
                        <Text style={{ color: focused ? '#1a396f' : '#ffffff' }}>PROFILE</Text>
                    </View>
                ),
            }} />
        </Tabs.Navigator>
    )
}

export default Tab