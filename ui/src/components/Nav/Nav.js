import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import NavBrand from './NavBrand/NavBrand'
import NavLink from './NavLink/NavLink'
import NavButton from './NavButton/NavButton'
import { withTheme, MuiThemeProvider } from '@material-ui/core/styles'
import './Nav.css'

const Nav = props => {
  const { theme } = props

  return (
    <MuiThemeProvider theme={theme}>
      <Drawer variant='permanent' color='primary'>
        <NavBrand />
        <Divider className='NavDivider' />
        <NavButton />
        <Divider className='NavDivider' />
        <Link
          name='myDrive'
          to='/'
          className='LinkText'
          activeStyle={{
            borderLeft: '2px',
            color: 'pink'
          }}
          onClick={() => props.folderHandler(null)}
        >
          <NavLink />
        </Link>
        <Divider light className='NavDivider' />
        <Link
          name='deleted'
          to='/deleted'
          className='LinkText'
          activeStyle={{
            borderLeft: '2px',
            color: 'pink'
          }}
        >
          <NavLink delete />
        </Link>
      </Drawer>
    </MuiThemeProvider>
  )
}

export default withTheme()(Nav)
