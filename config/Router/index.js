import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigitaion from '../Router/navigation/Tabs'
import { AuthStackScreen } from '../Router/navigation/Stack'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'
import { Logout, ValidateToken } from '../Redux/action/authActionCreator'

const Router = (props) => {

    const [userData, setUserData] = useState(true)
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        try {
            let user = await AsyncStorage.getItem('USER_INFO');
            setUserData(false)
        }
        catch (error) {
            alert(error)
        }
    }


    if (userData) {
        getData()
        if (props.user.isLoggedIn) {
            props.dispatchValidate(() => {
                props.dispatchLogoutAction()
                alert('session expired')
            })
        }
    }

    return (
        <NavigationContainer>
            {
                props.user.isLoggedIn ? (
                    <TabNavigitaion />
                ) : (
                    <AuthStackScreen />
                )
            }

        </NavigationContainer>
    );
}

const mapStateToProps = (state) => ({ user: state.user })

const mapDispatchToProps = (dispatch) => ({
    dispatchLogoutAction: () => dispatch(Logout()),
    dispatchValidate: (onError) => dispatch(ValidateToken(onError))
})

export default connect(mapStateToProps, mapDispatchToProps)(Router);
