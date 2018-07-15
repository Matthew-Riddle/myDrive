import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actionCreators from './store/actions'
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
  componentDidMount () {
    document.addEventListener('keydown', this.handleEscPress, false)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleEscPress, false)
  }

  handleEscPress = e => {
    if (e.keyCode === 27) {
      this.props.getNoneSelected()
    }
  }

  handleAppClick = () => {
    this.props.getNoneSelected()
  }

  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <div className='App'>
            <Nav />
            <Switch>
              <Route exact path='/' render={() => <View />} />
              <Route exact path='/deleted' render={() => <View deleted />} />
            </Switch>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getNoneSelected: () => dispatch(actionCreators.getNoneSelectedAsync())
})

export default withRouter(connect(null, mapDispatchToProps)(App))
