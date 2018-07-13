import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import View from './components/View/View'
import Nav from './components/Nav/Nav'
import './App.css'
import { CssBaseline } from '@material-ui/core'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className='App'>
          <Nav />
          <Switch>
            <Route path='/myDrive' render={() => <View myDrive />} />
            <Route path='/deleted' render={() => <View deleted />} />
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}

export default App
