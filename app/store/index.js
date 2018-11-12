import { combineReducers } from 'redux'
import user from './user/user.reducer'
import auctionHouse from './auctionHouses/auctionHouse.reducer'

const rootReducer = combineReducers({
    user,
    auctionHouse
})

export default rootReducer