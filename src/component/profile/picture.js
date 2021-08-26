import React from 'react'
import { Image } from 'react-native';

const ProfilePicture = (props) => {
    let gender = props.gender
    if (gender == 'men') {
        return <Image source={require('../../images/icon/man.png')} style={{ width: 203, height: 207, borderRadius: 203 / 2 }} />
    } else {
        return <Image source={require('../../images/icon/women.png')} style={{ width: 203, height: 207, borderRadius: 203 / 2 }} />
    }
}

export default ProfilePicture
