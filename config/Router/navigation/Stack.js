import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Book, BookList, History, Profile, Login, BorrowDetail, Visit, Result } from '../../../src/Screens'

const HomeStack = createStackNavigator()
const BookListStack = createStackNavigator()
const HistoryStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const AuthStack = createStackNavigator()


const HomeStackScreen = () => (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="Book" component={Book} />
    </HomeStack.Navigator>
)

const BookStackScreen = () => (
    <BookListStack.Navigator screenOptions={{ headerShown: false }}>
        <BookListStack.Screen name="BookList" component={BookList} />
        <BookListStack.Screen name="Book" component={Book} />
        <BookListStack.Screen name="Result" component={Result} />
    </BookListStack.Navigator>
)

const HistoryStackScreen = () => (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
        <HistoryStack.Screen name="History" component={History} />
        <HistoryStack.Screen name="BorrowDetail" component={BorrowDetail} />
        <HistoryStack.Screen name="Visit" component={Visit} />
    </HistoryStack.Navigator>
)

const ProfileScreen = () => (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
        <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
)

const AuthStackScreen = () => (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
)



export {
    HomeStackScreen, BookStackScreen, HistoryStackScreen, ProfileScreen, AuthStackScreen
}