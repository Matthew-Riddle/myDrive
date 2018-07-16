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
import lime from '@material-ui/core/colors/lime'
import './App.css'
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e94c3c',
      main: '#b00b13',
      dark: '#790000'
    },
    secondary: lime,
    text: {
      primary: '#fa6607',
      secondary: '#000000'
    },
    type: 'dark'
  }
})
class App extends Component {
  state = {
    currentFolder: null
  }

  folderHandler = name => {
    this.setState({ currentFolder: name })
  }

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
          <div className='App' onClick={this.handleAppClick}>
            <Nav
              folderHandler={this.folderHandler}
              currentFolder={this.state.currentFolder}
            />
            <Switch>
              <Route
                exact
                path='/'
                render={() => (
                  <View
                    folderHandler={this.folderHandler}
                    currentFolder={this.state.currentFolder}
                  />
                )}
              />
              <Route
                exact
                path='/deleted'
                render={() => (
                  <View
                    deleted
                    folderHandler={this.folderHandler}
                    currentFolder={this.state.currentFolder}
                  />
                )}
              />
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
