import {applyMiddleware, combineReducers, createStore} from "redux";
// import thunkMiddleware from 'redux-thunk';
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    profile: profileReducer,
})

let store = createStore(reducers);

//applyMiddleware(thunkMiddleware)
//
export default store