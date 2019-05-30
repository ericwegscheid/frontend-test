import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './containers/app'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reducers } from './store'

ReactDOM.render(
  <Provider store={
    createStore(
      combineReducers(reducers),
      composeWithDevTools(applyMiddleware(thunk))
    )
  }>
    <App />
  </Provider>,
  document.getElementById('root')
)

