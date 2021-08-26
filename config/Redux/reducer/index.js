import { combineReducers } from 'redux'

import user from './userReducer'
import book from './bookReducer'
import borrow from './borrowReducer'

const rootReducer = combineReducers({ user, book, borrow })

export default rootReducer