import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, Alert, } from 'react-native';
import library from '../../../images/Home/library.png'
import { connect } from 'react-redux'
import { getVisitData } from '../../../../config/Redux/action/visitActionCreator'
import LoadingScreen from '../../../component/loading/visitor'
import Footer from '../../../component/footer/history'
import EmptyVisit from '../../../component/LastBorrow/empty'


const index = (props) => {

    const { student_id } = props.route.params
    const [visit, setVisit] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [refresh, setRefresh] = useState(false)
    const [endPage, setEndPage] = useState(false)

    useEffect(() => {
        getData()
    }, [page])

    const getData = async (refreshPage) => {
        setLoading(true)
        await props.dispatchGetVisit(student_id, page, (data) => {
            if (data) {
                if (refreshPage) {
                    setVisit([])
                    setVisit(data)
                } else {
                    setVisit(visit.concat(data))
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
            <TouchableOpacity>
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{
                        height: 150, borderColor: '#f7f1e3', borderWidth: 1,
                        borderRadius: 15, flexDirection: 'row',
                        alignItems: 'center', paddingHorizontal: 10,
                        backgroundColor: 'white', marginBottom: 20,
                    }}>
                        <View style={{ height: '50%', width: '20%' }}>
                            <Image source={library} style={{ height: '100%', width: '100%' }} />
                        </View>
                        <View style={{ height: '35%', width: '80%', paddingHorizontal: 10 }}>
                            <View style={{ alignItems: 'flex-start', marginVertical: 2 }}>
                                <Text style={{ fontSize: 13, padding: 3 }}>Visit Date: {item.date}</Text>
                            </View>
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: 13, padding: 3 }}>Visit Time: {item.time}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ height: '100%', backgroundColor: '#F0F3F7', }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 150 }}>
                <View style={Styles.navBox}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('History')}>
                        <Text style={{ padding: 20, fontSize: 25 }}>Borrow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Visit')}>
                        <Text style={{ padding: 20, fontSize: 25 }}>Visit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                loading ?
                    <LoadingScreen /> :
                    <FlatList
                        data={visit}
                        keyExtractor={(item) => item.id}
                        renderItem={content}
                        ListFooterComponent={<Footer refresh={refresh} />}
                        onEndReached={endPage ? loadMore : null}
                        onEndReachedThreshold={0.5}
                        ListEmptyComponent={
                            <EmptyVisit section={'Your Visit History is Empty'} />
                        }
                        ListFooterComponent={Footer}
                        refreshing={refresh}
                        onRefresh={handleRefresh}
                        style={{ paddingTop: 30, borderTopRightRadius: 35, borderTopLeftRadius: 35, backgroundColor: 'white' }}
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
        backgroundColor: '#F0F3F7',
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
    dispatchGetVisit: (id, page, onSuccess) => dispatch(getVisitData(id, page, onSuccess))
})


export default connect(null, mapDispatchToProps)(index)
