import React from "react"
import ReactDOM from "react-dom"
import AccountSettings from "./components/AccountSettings"
import main from "./style/main.sass"
import {Provider} from "react-redux";
import {default as store} from '../redux/store/Store'

ReactDOM.render(
    <Provider store={store}>
        <AccountSettings/>
    </Provider>,
    document.getElementById( "root"))