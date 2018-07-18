import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import NavBrand from './NavBrand/NavBrand'
import NavLink from './NavLink/NavLink'
import NavButton from './NavButton/NavButton'
import NavTheme from './NavTheme/NavTheme'
import { withTheme } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import './Nav.css'
import { Typography } from '../../../node_modules/@material-ui/core'

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
        className={`LinkText ${props.location.pathname === '/' && props.theme.palette.type === 'dark' ? 'ActiveLink' : ''}
          ${props.location.pathname === '/' && props.theme.palette.type === 'light' ? 'ActiveLinkLight' : ''}
        `}
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
        className={`LinkText ${props.location.pathname === '/deleted' ? 'ActiveLink' : ''}
        ${props.location.pathname === '/deleted' && props.theme.palette.type === 'light' ? 'ActiveLinkLight' : ''}
        `}
        onClick={() => {
          props.folderHandler(null)
        }}
      >
        <NavLink delete />
      </Link>
      <Typography style={{ fontWeight: 'bold' }}>
        DARK<NavTheme themeToggle={props.themeToggle} />LIGHT
      </Typography>
    </Drawer>
  )
}

export default withRouter(withTheme()(Nav))
