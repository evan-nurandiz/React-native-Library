import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { GetAllBook } from '../../../config/Redux/action/bookActionCreators'

function index({ navigation, dispatchAllBook, books }) {
    useEffect(() => dispatchAllBook(), [dispatchAllBook])

    return (
        <View >
            <View style={{ flexDirection: 'column', height: '100%' }}>
                <View style={{ flex: 9, backgroundColor: '#F0F3F7' }}>
                    <View style={{ flex: 2, flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', paddingHorizontal: 20 }}>
                        <ScrollView horizontal={true}>
                            <Text style={{ padding: 20, fontSize: 25 }}>All</Text>
                            <Text style={{ padding: 20, fontSize: 25 }}>Science</Text>
                            <Text style={{ padding: 20, fontSize: 25 }}>Journal</Text>
                            <Text style={{ padding: 20, fontSize: 25 }}>Art</Text>
                        </ScrollView>
                    </View>
                    <View style={{
                        flex: 8, backgroundColor: "#FFFFFF", borderTopLeftRadius: 25, borderTopRightRadius: 25, elevation: 4,
                        height: '100%', width: '100%', paddingTop: 30
                    }}>
                        <ScrollView>
                            <View style={styles.contaner} >
                                {
                                    books.map(book => (
                                        <View style={styles.book} key={book.id}>
                                            <TouchableOpacity onPress={() => navigation.navigate('Book',
                                                {
                                                    writter: `${book.writter}`, title: `${book.title}`,
                                                    description: `${book.description}`, image: `${book.book_image}`,
                                                    release: `${book.release}`, status: `${book.status}`
                                                }
                                            )} >
                                                <Image source={{ uri: `${book.book_image}` }} style={styles.BookImage} />
                                            </TouchableOpacity>
                                            <Text style={styles.Writter} >{book.writter}</Text>
                                            <Text style={styles.Title}>{book.title}</Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contaner: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 25,
        flexWrap: 'wrap',
    },
    book: {
        flexDirection: 'column',
        width: '50%',
        height: 230,
        padding: 10,
        marginBottom: 35
    },
    BookImage: {
        width: '100%',
        height: '100%',
        borderRadius: 15
    },
    Writter: {
        fontSize: 16,
    },
    Title: {
        fontSize: 18
    }

})

const mapStateToProps = state => ({
    books: state.book
})

const mapDispatchToProps = dispatch => ({
    dispatchAllBook: () => dispatch(GetAllBook())
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
