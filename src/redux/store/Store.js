import {applyMiddleware, createStore} from "redux";
import MainReducer from "../reducers/MainReducer";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";


export default createStore(MainReducer, applyMiddleware(logger,thunk,promise))