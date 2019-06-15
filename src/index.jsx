import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/app'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reducer } from './store'

ReactDOM.render(
  <Provider store={
    createStore(
      reducer,
      composeWithDevTools(applyMiddleware(thunk))
    )
  }>
    <App />
  </Provider>,
  document.getElementById('root')
)

