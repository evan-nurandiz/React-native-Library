import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const list = ({ item }) => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('Book',
            {
                writter: `${item.writter}`, title: `${item.title}`,
                description: `${item.description}`, image: `${item.book_image}`,
                release: `${item.release}`, status: `${item.status}`
            }
        )}>
            <View style={styles.container}>
                <Image source={{ uri: `${item.book_image}` }} style={styles.book} />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.Writter} >{item.writter}</Text>
                    <Text style={styles.Title}>{item.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default list

const styles = StyleSheet.create({
    historyNavContainer: {
        flex: 9,
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F3F7',
    },
    navBox: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 15,
    },
    container: {
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        marginBottom: 20
    },
    book: {
        width: 150,
        height: 220,
        borderRadius: 20
    },
    Writter: {
        fontSize: 16,
    },
    Title: {
        fontSize: 18
    },
    textInput: {
        width: "80%",
        borderColor: '#465881',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        height: 60,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    searchContainer: {
        width: '15%',
        backgroundColor: 'black',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -20,
        borderRadius: 10,
    }

})