/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import BookIcon from '../../images/icon/book.png'
import { connect } from 'react-redux'
import { GetBorrowList } from '../../../config/Redux/action/borrowActionCreator'
import LoadingScreen from '../../component/loading/visitor'
import Footer from '../../component/footer/history'
import EmptyBorrow from '../../component/LastBorrow/empty'

const index = ({ dispatchGetBorrowList, user, navigation }) => {

    const [loading, setLoading] = useState(false)
    const [borrow, setBorrow] = useState([])
    const [page, setPage] = useState(1)
    const [refresh, setRefresh] = useState(false)
    const [endPage, setEndPage] = useState(false)

    useEffect(() => {
        getData()
    }, [page])

    const getData = async (refreshPage) => {
        setLoading(true)
        await dispatchGetBorrowList(user.student_id, page, (data) => {
            if (data) {
                if (refreshPage) {
                    setBorrow(data)
                } else {
                    setBorrow(borrow.concat(data))
                }
                setLoading(false)
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

    const handleRefresh = () => {
        setPage(1)
        const refreshPage = true
        getData(refreshPage)
    }


    const content = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('BorrowDetail', {
                borrow_id: `${item.id}`,
                borrow_date: `${item.date_borrowed}`,
                return_date: `${item.date_returned}`,
                return_by_date: `${item.return_by_date}`,
                status: `${item.status}`,
                book_sum: `${item.book}`
            })} key={item.id}>
                <View style={{
                    height: 150, borderColor: '#f7f1e3', borderWidth: 1,
                    borderRadius: 15, flexDirection: 'row',
                    alignItems: 'center', paddingHorizontal: 10,
                    backgroundColor: 'white', marginBottom: 20,
                    marginHorizontal: 20
                }}>
                    <View style={{ height: '50%', width: '20%' }}>
                        <Image source={BookIcon} style={{ height: '100%', width: '100%' }} />
                    </View>
                    <View style={{ height: '50%', width: '80%' }}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                            <Text style={{
                                fontSize: 13, padding: 3, borderRadius: 5,
                                backgroundColor: item.status == 'complete' ? '#1a936f' : '#FFFF06',
                                color: item.status == 'complete' ? 'white' : 'black'
                            }}>{item.status}</Text>
                            <Text style={{ fontSize: 15 }}>{item.book} Books</Text>
                        </View>
                        <View style={{ alignItems: 'flex-start', marginVertical: 2 }}>
                            <Text style={{ fontSize: 13, padding: 3 }}>Borrow Date: {item.date_borrowed}</Text>
                        </View>
                        {
                            item.return_by_date ?
                                <View style={{ alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: 13, padding: 3 }}>Return By Date: {item.return_by_date}</Text>
                                </View> :
                                <View style={{ alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: 13, padding: 3 }}>Return Date: {item.date_returned}</Text>
                                </View>
                        }

                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 150 }}>
                <View style={Styles.navBox}>
                    <TouchableOpacity onPress={() => navigation.navigate('History')}>
                        <Text style={{ padding: 20, fontSize: 25 }}>Borrow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Visit', {
                        student_id: `${user.student_id}`
                    })}>
                        <Text style={{ padding: 20, fontSize: 25 }}>Visit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                loading ?
                    <LoadingScreen />
                    :
                    <FlatList
                        data={borrow}
                        keyExtractor={(item) => item.id}
                        renderItem={content}
                        ListFooterComponent={<Footer refresh={refresh} />}
                        onEndReached={endPage ? loadMore : null}
                        onEndReachedThreshold={0.5}
                        ListEmptyComponent={
                            <EmptyBorrow section={'Your Last Borrow Is Empty'} />
                        }
                        refreshing={refresh}
                        onRefresh={handleRefresh}
                        style={{ paddingTop: 30, borderTopRightRadius: 35, borderTopLeftRadius: 35, backgroundColor: 'white', minHeight: '100%' }}
                    />
            }
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    historyNavContainer: {
        flex: 9,
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F3F7'
    },
    navBox: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    historyContainer: {
        flex: 7,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 25
    },
    loader: {
        marginTop: 10,
        alignItems: 'center'
    }
})

const mapDispatchToProps = (dispatch) => ({
    dispatchGetBorrowList: (id, onSuccess, onError) => dispatch(GetBorrowList(id, onSuccess, onError))
})

const mapStateToProps = (state) => ({
    user: state.user,
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
