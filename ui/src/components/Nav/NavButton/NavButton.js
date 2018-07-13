import React from 'react'
import { Component } from 'react'
import './NavButton.css'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

class NavButton extends Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render () {
    const { anchorEl } = this.state
    return (
      <div className='NavButton'>

        <Button
          variant='extendedFab'
          aria-label='navbutton'
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup='true'
          onClick={this.handleClick}
          className='button'
          fullWidth
        >
          <AddIcon className='addIcon' />
          Add
        </Button>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <MenuItem onClick={this.handleClose}>File</MenuItem>
          <MenuItem onClick={this.handleClose}>Folder</MenuItem>
        </Menu>
      </div>
    )
  }
}
export default NavButton
