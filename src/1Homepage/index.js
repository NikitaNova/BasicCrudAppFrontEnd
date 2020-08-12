import React from 'react'
import ReactDOM from 'react-dom'
import App from "./components/App"
import main from "./style/main.sass"
import {Provider} from "react-redux";
import {default as store} from "../redux/store/Store";

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById("root"));