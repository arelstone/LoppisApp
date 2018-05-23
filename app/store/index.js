import { combineReducers } from 'redux'
import user from './user/user.reducer'
import header from './header/header.reducer'

const rootReducer = combineReducers({
    user, header
})

export default rootReducer