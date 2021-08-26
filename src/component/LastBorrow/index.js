import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import FastImage from 'react-native-fast-image'

const index = (props) => {
    return (
        <View style={{ marginHorizontal: 17, backgroundColor: 'white', borderRadius: 25, elevation: 3 }}>
            <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ paddingVertical: 10, alignItems: 'center' }}>
                    <Text>YOUR LAST BORROW</Text>
                </View>
                <View style={{ paddingVertical: 10, alignItems: 'center' }}>
                    <Text style={{
                        fontSize: 13, padding: 3, borderRadius: 5,
                        backgroundColor: props.date.status == 'complete' ? '#1a936f' : '#FFFF06',
                        color: props.date.status == 'complete' ? 'white' : 'black'
                    }}>{props.date.status}</Text>
                </View>
            </View>

            <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text>Borrow Date</Text>
                    <Text>{props.date.date_borrowed}</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text>Return Date</Text>
                    <Text>{props.date.date_returned}</Text>
                </View>
            </View>
            <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                {
                    props.books.map(book => (
                        <View style={{ flexDirection: 'column', marginRight: 10 }}>
                            <TouchableOpacity style={{ width: 132, height: 187 }} >
                                <FastImage source={{ uri: `${book.book.book_image}` }} style={{ height: '100%', width: '100%', borderRadius: 25 }} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'column' }}>
                                <Text>{book.book.writter}</Text>
                                <Text>{book.book.title}</Text>
                            </View>
                        </View>
                    ))
                }
            </View>

        </View>
    )
}

export default index
