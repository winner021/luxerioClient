import React from 'react'
import ReactDOM from 'react-dom'
import App from "./component/App"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from "./reducers"
import thunk from 'redux-thunk'

import { applyMiddleware} from 'redux'

ReactDOM.render(
    <Provider store={createStore(reducers,applyMiddleware(thunk))}>
        <App/>
    </Provider>

,document.querySelector("#root"));