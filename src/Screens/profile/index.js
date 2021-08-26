import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../atom/header/profile'
import { connect } from 'react-redux'
import { Logout, Profile } from '../../../config/Redux/action/authActionCreator'
import LoadingScreen from '../../component/loading/profile'
import ProfilePicture from '../../component/profile/picture'

const Index = ({ dispatchLogoutAction, dispatchGetProfile, user }) => {

    const [loading, setLoading] = useState(false)
    const [profile, setProfile] = useState({
        name: "",
        nim: "",
        departement: "",
        major: "",
        class: "",
        gender: "",
    })


    useEffect(() => {
        setLoading(true)
        dispatchGetProfile(user.student_id, (data) => {
            setProfile((prevState) => ({
                ...prevState,
                name: data.name,
                nim: data.nim,
                departement: data.departement,
                major: data.major,
                class: data.class,
                gender: data.gender
            }))
        })
        setLoading(false)
    }, [dispatchGetProfile])

    return (
        <View>
            {
                loading ? (
                    <LoadingScreen />
                ) : (
                    <View style={{ backgroundColor: '#F0F3F7' }}>
                        <View style={{ flexDirection: 'column', height: '100%' }}>
                            <View style={{ flex: 3 }} >
                                <Header onLogout={dispatchLogoutAction} />
                            </View>
                            <View style={{ flex: 6, justifyContent: 'center' }}>
                                <View style={Styles.ProfileContainer}>
                                    <View style={Styles.imageContainer}>
                                        <ProfilePicture gender={profile.gender} />
                                    </View>
                                    <ScrollView horizontal="true">
                                        <View style={Styles.InformationContainer}>
                                            <View style={Styles.Information}>
                                                <Text style={Styles.FieldInformationText}>Name</Text>
                                                <Text style={Styles.FieldText}>{profile.name}</Text>
                                            </View>
                                            <View style={Styles.Information}>
                                                <Text style={Styles.FieldInformationText}>Nim</Text>
                                                <Text style={Styles.FieldText}>{profile.nim}</Text>
                                            </View>
                                            <View style={Styles.Information}>
                                                <Text style={Styles.FieldInformationText}>Gender</Text>
                                                <Text style={Styles.FieldText}>{profile.gender}</Text>
                                            </View>
                                            <View style={Styles.Information}>
                                                <Text style={Styles.FieldInformationText}>Major</Text>
                                                <Text style={Styles.FieldText}>{profile.departement}</Text>
                                            </View>
                                            <View style={Styles.Information}>
                                                <Text style={Styles.FieldInformationText}>Consentration</Text>
                                                <Text style={Styles.FieldText}>{profile.major}</Text>
                                            </View>
                                            <View style={Styles.Information}>
                                                <Text style={Styles.FieldInformationText}>Class</Text>
                                                <Text style={Styles.FieldText}>{profile.class}</Text>
                                            </View>
                                        </View>
                                    </ScrollView>
                                </View>
                            </View>
                        </View>
                    </View>

                )
            }
        </View>
    )
}


const Styles = StyleSheet.create({
    ProfileContainer: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: '100%',
        width: '100%'
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: -100
    },
    InformationContainer: {
        padding: 20,
    },
    Information: {
        marginBottom: 15
    },
    FieldText: {
        color: '#000000',
        fontSize: 25
    },
    FieldInformationText: {
        color: '#BEBCBC',
        fontSize: 25
    }


})

const mapDispatchToProps = (dispatch) => ({
    dispatchLogoutAction: () => dispatch(Logout()),
    dispatchGetProfile: (id, onSuccess) => dispatch(Profile(id, onSuccess))
})

const mapStateToProps = (state) => ({ user: state.user })

export default connect(mapStateToProps, mapDispatchToProps)(Index)
