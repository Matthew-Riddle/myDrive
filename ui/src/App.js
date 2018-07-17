import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actionCreators from './store/actions'
import View from './components/View/View'
import Nav from './components/Nav/Nav'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
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

  isLight = () => this.state.lightTheme === true

  themeToggle = () => {
    this.setState({
      lightTheme: !this.isLight()
    })
  }

  render () {
    return (
      <MuiThemeProvider theme={this.props.theme}>
        <CssBaseline />
        <div className='App' onClick={this.handleAppClick}>
          <Nav
            folderHandler={this.folderHandler}
            currentFolder={this.state.currentFolder}
            themeToggle={this.props.themeToggle}
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
