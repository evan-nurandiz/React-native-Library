import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../../atom/header/borrowDetail'
import { connect } from 'react-redux'
import { GetBorrowById } from '../../../../config/Redux/action/borrowActionCreator'
import FastImage from 'react-native-fast-image'
import LoadingScreen from '../../../component/loading/borrowDetail'


const index = (props) => {

    const { borrow_id, borrow_date, return_date, return_by_date, status } = props.route.params
    const [book, setBook] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        await props.dispatchGetBorrowById(borrow_id, (data) => {
            setBook(data)
            setLoading(false)
        })
    }


    return (
        <View style={{
            flex: 1,
        }}>
            {
                loading ?
                    <LoadingScreen />
                    :
                    <View style={{
                        flex: 1,
                    }}>
                        <Header borrow_date={borrow_date}
                            return_date={return_date}
                            return_by_date={return_by_date}
                            page={() => props.navigation.goBack()}
                        />
                        <View style={Styles.DetailContainer}>
                            <View>
                                <Text style={{ textAlign: 'right' }}>{status}</Text>
                            </View>
                            <ScrollView style={{ flex: 1, height: '100%', marginTop: 10 }}>
                                {
                                    book.map(book => (
                                        <View style={{ flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 15 }} key={book.book.book_id}>
                                            <View style={{
                                                flexDirection: 'row', width: '100%', minHeight: 200,
                                                justifyContent: 'space-around', alignItems: 'center'
                                            }}>
                                                <FastImage source={{ uri: `${book.book.book_image}` }} style={{ width: '40%', height: '100%', borderRadius: 25 }} />
                                                <View style={{ flexDirection: 'column', width: '60%', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 23, color: '#BEBCBC' }}>{book.book.writter}</Text>
                                                    <Text style={{ fontSize: 24 }}>{book.book.title}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    ))
                                }
                            </ScrollView>
                            <View>
                                <View
                                    style={{
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,
                                    }}
                                />
                                <View style={{ alignItems: 'flex-end', marginTop: 15 }}>
                                    <Text style={{ fontSize: 25 }}>{book.length} BOOKS</Text>
                                </View>
                            </View>
                        </View>
                    </View >
            }
        </View>
    )
}

const Styles = StyleSheet.create({
    DetailContainer: {
        flex: 7,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        backgroundColor: '#FFFFFF',
        padding: 20,
        height: '100%',
        width: '100%'
    }

})

const mapDispatchToProps = (dispatch) => ({
    dispatchGetBorrowById: (id, onSuccess) => dispatch(GetBorrowById(id, onSuccess))
})

const mapStateToProps = (state) => ({
    user: state.user,
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
