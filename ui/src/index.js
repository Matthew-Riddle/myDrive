import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import './index.css'
import App from './App'
import fileReducer from './store/reducers/fileReducer'
import folderReducer from './store/reducers/folderReducer'
import { applyMiddleware } from '../node_modules/redux'

const store = createStore(fileReducer, folderReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,
  document.getElementById('root')
)
