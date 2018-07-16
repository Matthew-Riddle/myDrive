import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DeleteIcon from '@material-ui/icons/Delete'
import FileDownloadIcon from '@material-ui/icons/FileDownload'
import { withTheme } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'

import './NavLink.css'

class NavLink extends Component {
  render () {
    return (
      <ListItem button>
        <ListItemIcon>
          {this.props.delete
            ? <DeleteIcon
              style={{ color: this.props.theme.palette.text.primary }}
              />
            : <FileDownloadIcon
              style={{ color: this.props.theme.palette.text.primary }}
              />}
        </ListItemIcon>
        <ListItemText primary={this.props.delete ? 'Trash' : 'My Drive'} />
      </ListItem>
    )
  }
}

export default withRouter(withTheme()(NavLink))
