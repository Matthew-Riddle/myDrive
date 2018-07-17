import React, { Component } from 'react'
import { Switch } from '@material-ui/core'
import Brightness2 from '@material-ui/icons/Brightness2'
import Brightness7 from '@material-ui/icons/Brightness7'
import { withTheme } from '@material-ui/core/styles'

class NavTheme extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <Switch
        icon={<Brightness2 />}
        checkedIcon={<Brightness7 />}
        onChange={this.props.themeToggle}
        color='secondary'
      />
    )
  }
}

export default withTheme()(NavTheme)
