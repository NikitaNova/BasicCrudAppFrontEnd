import React from "react"
import ReactDOM from "react-dom"
import AccountPage from "./components/AccountPage"
import main from "./style/main.sass"
import {Provider} from "react-redux";
import {default as store} from '../redux/store/Store'


ReactDOM.render(
    <Provider store={store}>
    <AccountPage />
    </Provider>,
    document.getElementById("root"))