import { combineReducers } from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // we can add more state to our local storage
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer);