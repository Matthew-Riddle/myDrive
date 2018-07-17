import React, { Component } from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import App from './App'

class ThemeWrapper extends Component {
  state = {
    theme: createMuiTheme({
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
        type: 'dark'
      }
    })
  }

  isLight = () => this.state.lightTheme === true

  themeToggle = () => {
    this.setState({
      theme: {
        ...this.state.theme,
        palette: {
          ...this.state.theme.palette,
          type: this.state.theme.palette.type === 'dark' ? 'light' : 'dark'
        }
      }
    })
  }

  render () {
    console.log(this.state.theme)
    return <App theme={this.state.theme} themeToggle={this.themeToggle} />
  }
}

export default ThemeWrapper
