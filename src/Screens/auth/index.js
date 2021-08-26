import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import Logo from '../../images/login/logo.png'
import { connect } from 'react-redux'
import { loginUser } from '../../../config/Redux/action/authActionCreator'

const Index = ({ dispatchLoginAction }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [dialog, setDialog] = useState(false)

    const handleOnSubmit = (event) => {
        setDialog(true)
        event.persist();
        validate()
    }

    const validate = async () => {
        await dispatchLoginAction(email, password,
            () => setDialog(false),
            () => {
                setDialog(false)
                alert('nim atau password salah')
            })
    }

    return (
        <View style={{ flexDirection: 'column', backgroundColor: '#F0F3F7' }}>
            <Modal
                visible={dialog}>
                <View style={{ flex: 1, backgroundColor: "#00000020", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ backgroundColor: "white", padding: 10, borderRadius: 5, width: "80%", alignItems: "center" }}>
                        <Text>Loading...</Text>
                        <ActivityIndicator size="large" color="#f35588" />
                    </View>
                </View>
            </Modal>
            <View style={{
                justifyContent: 'center', alignItems: 'center', backgroundColor: '#2BD553',
                borderBottomLeftRadius: 120
            }}>
                <View>
                    <Image source={Logo} style={{ width: 311, height: 311 }} />
                </View>
            </View>
            <View>
                <View style={Sytles.loginContainer}>
                    <Text style={{ fontSize: 25, marginBottom: 20 }}>Login</Text>
                    <TextInput style={Sytles.textInput} placeholder="NIM" onChangeText={email => setEmail(email)} />
                    <TextInput style={Sytles.textInput} secureTextEntry={true} placeholder="PASSWORD" onChangeText={password => setPassword(password)} />
                    <TouchableOpacity style={Sytles.loginBtn} onPress={handleOnSubmit}>
                        <Text >LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const Sytles = StyleSheet.create({
    logoContainer: {
        flex: 4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ADE6E6',
        borderBottomRightRadius: 140, borderBottomLeftRadius: 140
    },
    loginContainer: {
        padding: 20,
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
    },
    textInput: {
        width: "100%",
        borderColor: '#465881',
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        height: 60,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
        color: 'black'
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#2BD553",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
})

const mapDispatchToProps = dispatch => ({
    dispatchLoginAction: (email, password, onSuccess, onError) =>
        dispatch(loginUser({ email, password }, onSuccess, onError))
})

export default connect(null, mapDispatchToProps)(Index)
