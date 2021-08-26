import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux'
import { GetAllBook } from '../../../config/Redux/action/bookActionCreators'
import SearchBar from '../../component/navbar/search'
import FastImage from 'react-native-fast-image'
import Loading from '../../component/loading/activity'
import Footer from '../../component/footer/book'
import LoadinScreen from '../../component/loading/booklist'

const index = (props) => {
    const [books, setBooks] = useState([])
    const [page, setPage] = useState(1)
    const [refresh, setRefresh] = useState(false)
    const [endPage, setEndPage] = useState(false)
    const [loading, setLoading] = useState(true)
    const numColumn = 2

    useEffect(() => {
        fetchData()
    }, [page])

    const fetchData = async () => {
        await props.dispatchAllBook(page, (data) => {
            setLoading(false)
            if (data) {
                setBooks(books.concat(data))
                setRefresh(false)
            }
            else {
                setEndPage(true)
            }
        })
    }

    const loadMore = () => {
        setPage(page + 1)
        setRefresh(true)
    }

    const content = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('Book',
                {
                    writter: `${item.writter}`, title: `${item.title}`,
                    description: `${item.description}`, image: `${item.book_image}`,
                    release: `${item.release}`, status: `${item.status}`,
                    stock: `${item.stock}`
                }
            )}>
                <View style={styles.container}>
                    <FastImage
                        source={{ uri: `${item.book_image}` }}
                        style={styles.book}
                        onProgress={() => {
                            return (
                                <Loading Loading={true} />
                            )
                        }}
                        onLoad={() => {
                            return (
                                <Loading Loading={false} />
                            )
                        }} />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.Writter} >{item.writter}</Text>
                        <Text style={styles.Title}>{item.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View >
            {
                loading ?
                    <LoadinScreen /> :
                    <SafeAreaView style={{ height: '100%', backgroundColor: '#F0F3F7', }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 100 }}>
                            <SearchBar Page={(key) => {
                                if (key) {
                                    props.navigation.navigate('Result', {
                                        key: `${key}`
                                    })
                                }
                                else {
                                    alert('keyword kosong')
                                }
                            }} />
                        </View>
                        <View style={{ backgroundColor: "#FFFFFF", borderTopLeftRadius: 25, borderTopRightRadius: 25, elevation: 4 }}>
                            <View style={{ paddingVertical: 30, alignItems: 'center' }}>
                                <FlatList
                                    data={books}
                                    keyExtractor={(item) => item.id}
                                    renderItem={content}
                                    numColumns={numColumn}
                                    ListFooterComponent={Footer}
                                    onEndReached={endPage ? loadMore : null}
                                    onEndReachedThreshold={0.5}
                                />
                            </View>
                        </View>
                    </SafeAreaView>
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

const mapDispatchToProps = dispatch => ({
    dispatchAllBook: (onSuccess, onError) => dispatch(GetAllBook(onSuccess, onError))
})

export default connect(null, mapDispatchToProps)(index)
