import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'thunk'
import './index.css'
import App from './App'
import fileReducer from './store/Reducers/fileReducer'
import folderReducer from './store/Reducers/folderReducer'

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
)
