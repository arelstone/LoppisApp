import { combineReducers } from 'redux'
import user from './user/user.reducer'
import header from './header/header.reducer'
import resellers from './resellers/resellers.reducer'

const rootReducer = combineReducers({
    header, user, resellers
})

export default rootReducer