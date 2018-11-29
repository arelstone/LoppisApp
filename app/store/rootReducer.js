import { combineReducers } from 'redux'
import auth from './auth/auth.reducer'
import user from './user/user.reducer'
import auctionHouse from './auctionHouses/auctionHouse.reducer'

const rootReducer = combineReducers({
    auth, 
    user,
    auctionHouse,
})

export default rootReducer