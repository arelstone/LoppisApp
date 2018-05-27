import { combineReducers } from 'redux'
import user from './user/user.reducer'
import header from './header/header.reducer'
import resellers from './resellers/resellers.reducer'
import reseller from './reseller/reseller.reducer'

const rootReducer = combineReducers({
    header, user, resellers, reseller
})

export default rootReducer