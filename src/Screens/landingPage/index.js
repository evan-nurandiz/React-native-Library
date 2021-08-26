import React from 'react';
import { ScrollView, View } from 'react-native';
import Profile from '../../component/profile'
import LastBorrow from '../../component/LastBorrow'
import EmptyBorrow from '../../component/LastBorrow/empty'
import { getTime } from './helper'
import Loading from '../../component/loading/landing'
import { getLastBorrow, getProfileData, getLastBorrowDate } from '../../../config/Redux/action/landingActionCreator'
import { GetDiscoverBook } from '../../../config/Redux/action/bookActionCreators'
import { connect } from 'react-redux'

class HomeScreen extends React.Component {
    state = {
        time: '',
        loading: false,
        have_borow: false,
        information: [],
        borrow: [],
        borrowDate: [],
        books: []
    }

    componentDidMount() {
        this.setState({ loading: true })
        let times
        times = getTime()
        this.setState({ time: times })
        this.getProfileData()
        this.LastBorrows()
        this.LastBorrowDate()
    }

    getProfileData = async () => {
        await this.props.dispatchGetInformation(this.props.user.student_id, (data) => {
            this.setState({ information: data })
            this.setState({ loading: false })
        })
    }

    LastBorrowDate = async () => {
        await this.props.dispatchGetLastBorrowDate(this.props.user.student_id, (data) => {
            this.setState({ borrowDate: data })
        })
    }

    LastBorrows = async () => {
        await this.props.dispatchGetLastBorrow(this.props.user.student_id, (data) => {
            this.setState({ borrow: data })
            this.setState({ have_borow: true })
        })
    }


    render() {
        const LoadingScreen = this.state.loading
        const lastborrow = this.state.have_borow

        return (
            <View>
                {
                    LoadingScreen ?
                        <Loading /> :
                        <View style={{ backgroundColor: '#F0F3F7' }}>
                            <View style={{ flexDirection: 'column', height: '100%' }}>
                                <View style={{ flex: 4 }} >
                                    <Profile time={this.state.time} information={this.state.information} />
                                </View>
                                <View style={{ flex: 5, justifyContent: 'center' }}>
                                    <ScrollView>
                                        <View>
                                            {
                                                lastborrow ?
                                                    <View style={{ marginVertical: 20 }}>
                                                        <LastBorrow books={this.state.borrow} date={this.state.borrowDate} />
                                                    </View>
                                                    : <View style={{ marginVertical: 20 }}>
                                                        <View style={{ margin: 10, backgroundColor: 'white', borderRadius: 25, elevation: 3, padding: 10 }}>
                                                            <EmptyBorrow section={'Your Last Borrow Is Empty'} title={'Your Last Borrow'} />
                                                        </View>
                                                    </View>
                                            }
                                        </View>
                                    </ScrollView>

                                </View>
                            </View>
                        </View>
                }
            </View>
        )
    }

}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    dispatchGetLastBorrow: (id, onSuccess) => dispatch(getLastBorrow(id, onSuccess)),
    dispatchGetLastBorrowDate: (id, onSuccess) => dispatch(getLastBorrowDate(id, onSuccess)),
    dispatchGetInformation: (id, onSuccess) => dispatch(getProfileData(id, onSuccess)),
    dispatchGetDiscoverBook: (onSuccess, onError) => dispatch(GetDiscoverBook(onSuccess, onError))
})


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);