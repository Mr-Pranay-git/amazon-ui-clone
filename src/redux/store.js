import {createStore, combineReducer} from 'redux';
import cartReducer from "./reducer/reducer";

const rootReducer = combineReducer({
    cart: cartReducer
})

const store = createStore(rootReducer);

export default store;
