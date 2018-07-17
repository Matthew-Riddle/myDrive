import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import fileReducer from './store/reducers/fileReducer'
import folderReducer from './store/reducers/folderReducer'
import selectReducer from './store/reducers/selectReducer'
import './index.css'
import ThemeWrapper from './ThemeWrapper'

const rootReducer = combineReducers({
  files: fileReducer,
  folders: folderReducer,
  selected: selectReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter><ThemeWrapper /></BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
