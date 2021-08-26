import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import Header from '../../atom/header/result'
import { connect } from 'react-redux'
import { SearchBook } from '../../../config/Redux/action/borrowActionCreator'
import axios from 'axios'
import LoadingScreen from '../../component/loading/visitor'
import FastImage from 'react-native-fast-image'
import Empty from '../../component/LastBorrow/empty'

const index = (props) => {
    const numColumn = 2
    const [book, setBook] = useState()
    const [loading, setLoading] = useState(false)
    const { key } = props.route.params

    useEffect(() => {
        setLoading(true)
        FetchData()
    }, [])

    const FetchData = () => {
        if (key) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${props.user.token}`
            axios.get(`https://perpustakaan-elektro.my.id/api/mobile/book/search/${key}`).then((response) => {
                if (response.data.data) {
                    setBook(response.data.data)
                } else {
                    setLoading(false)
                }
            }).then(() => {
                setLoading(false)
            })
        }

    }

    const content = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('Book',
                {
                    writter: `${item.writter}`, title: `${item.title}`,
                    description: `${item.description}`, image: `${item.book_image}`,
                    release: `${item.release}`, status: `${item.status}`
                }
            )}>
                <View style={styles.container}>
                    <FastImage source={{ uri: `${item.book_image}` }} style={styles.book} />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.Writter} >{item.writter}</Text>
                        <Text style={styles.Title}>{item.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    return (
        <View style={{ flexDirection: 'column', flex: 1 }}>
            <Header page={() => props.navigation.goBack()} />
            {
                loading ?
                    <LoadingScreen /> :
                    <View style={{
                        flex: 8, backgroundColor: 'white',
                        borderTopRightRadius: 20, borderTopLeftRadius: 20,
                        width: '100%',
                        flexDirection: 'column',
                    }}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 20 }}>
                            <FlatList
                                data={book}
                                keyExtractor={(item) => item.id}
                                renderItem={content}
                                numColumns={numColumn}
                                ListEmptyComponent={<Empty section={'Book Not Found'} />}
                            />
                        </View>
                    </View>
            }
        </View>
    )
}

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

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    dispatchSearchBook: (onSuccess) => dispatch(SearchBook(onSuccess))
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
