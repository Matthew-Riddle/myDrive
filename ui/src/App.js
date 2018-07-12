import React, { Component } from 'react'
import './App.css'
import { CssBaseline } from '@material-ui/core'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className='App'>
          <header className='App-header'>
            <h1>myDrive</h1>
          </header>
        </div>
      </React.Fragment>
    )
  }
}

export default App
