import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux"
import thunk from "redux-thunk"
import { productReducer } from "./redux/Reducer"
const composeEnhancer= window._REDUX_DEV_TOOLS_EXTENSION_COMPOSE||compose;
export const store=legacy_createStore(productReducer,composeEnhancer(applyMiddleware(thunk)))
console.log(store.getState())