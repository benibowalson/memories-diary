
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './benny-reducers/combined-post-reducer'

import './index.css'
import App from './App'

const mystore = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={mystore}>
        <App />
    </Provider>,
    document.getElementById('root')
)