import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionCreators from './store/actions'
import View from './components/View/View'
import Nav from './components/Nav/Nav'
import { CssBaseline } from '@material-ui/core'
import './App.css'

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
      <React.Fragment>
        <CssBaseline />
        <div className='App' onClick={this.handleAppClick}>
          <Nav />
          <Switch>
            <Route exact path='/' render={() => <View />} />
            <Route exact path='/deleted' render={() => <View deleted />} />
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getNoneSelected: () => dispatch(actionCreators.getNoneSelectedAsync())
})

export default connect(null, mapDispatchToProps)(App)
