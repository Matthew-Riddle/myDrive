import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import View from './components/View/View'
import Nav from './components/Nav/Nav'
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core'
import indigo from '@material-ui/core/colors/indigo'
import lime from '@material-ui/core/colors/lime'
import './App.css'
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: lime
  }
})
class App extends Component {
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <div className='App'>
            <Nav />
            <Switch>
              <Route path='/' render={() => <View />} />
              <Route path='/deleted' render={() => <View deleted />} />
            </Switch>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default App
