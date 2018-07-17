import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import NavBrand from './NavBrand/NavBrand'
import NavLink from './NavLink/NavLink'
import NavButton from './NavButton/NavButton'
import NavTheme from './NavTheme/NavTheme'
import { withTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import './Nav.css'

const Nav = props => {
  return (
    <Drawer variant='permanent' color='primary' className='Navigation'>
      <NavBrand />
      <Divider className='NavDivider' />
      <NavButton />
      <Divider className='NavDivider' />
      <Link
        name='myDrive'
        to='/'
        className={`LinkText ${props.location.pathname === '/' ? 'ActiveLink' : ''}`}
        onClick={() => {
          props.folderHandler(null)
        }}
      >
        <NavLink />
      </Link>
      <Divider light className='NavDivider' />
      <Link
        name='deleted'
        to='/deleted'
        className={`LinkText ${props.location.pathname === '/deleted' ? 'ActiveLink' : ''}`}
      >
        <NavLink delete />
      </Link>
      <NavTheme themeToggle={props.themeToggle} />
    </Drawer>
  )
}

export default withRouter(withTheme()(Nav))
