import React, { Component, Children } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actionCreators from './store/actions'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import View from './components/View/View'
import Nav from './components/Nav/Nav'
import { CssBaseline, MuiThemeProvider, Fade } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import './App.css'
class App extends Component {
  state = {
    currentFolder: null,
    lightTheme: false
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

  themeToggle = () => {
    this.setState(prevState => ({
      lightTheme: !prevState.lightTheme
    }))
  }

  render () {
    const theme = createMuiTheme({
      palette: {
        primary: {
          light: '#e94c3c',
          main: '#b00b13',
          dark: '#790000'
        },
        text: {
          primary: '#fa6607',
          secondary: '#000000'
        },
        type: this.state.lightTheme ? 'light' : 'dark'
      }
    })
    console.log(theme)
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className='App' onClick={this.handleAppClick}>
          <Nav
            folderHandler={this.folderHandler}
            currentFolder={this.state.currentFolder}
            themeToggle={this.themeToggle}
            id='themeToggle'
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
      </MuiThemeProvider>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getNoneSelected: () => dispatch(actionCreators.getNoneSelectedAsync())
})

export default withRouter(connect(null, mapDispatchToProps)(App))
