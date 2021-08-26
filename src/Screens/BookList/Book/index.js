import React from 'react'
import { View } from 'react-native';
import BookPage from '../../../component/book'


class index extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const navigation = this.props.navigation
        const { writter, title, description, image, release, status, stock } = this.props.route.params
        return (
            <View style={{ backgroundColor: '#F0F3F7' }}>
                <View style={{ flexDirection: 'column', height: '100%' }}>
                    <View style={{ flex: 9, justifyContent: 'center' }}>
                        <BookPage writter={writter} title={title} description={description}
                            image={image} release={release} status={status} stock={stock} page={() => navigation.goBack()} />
                    </View>
                </View>
            </View>
        )
    }

}

export default index
