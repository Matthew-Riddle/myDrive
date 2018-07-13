import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import NavBrand from './NavBrand/NavBrand'
import NavLink from './NavLink/NavLink'
import NavButton from './NavButton/NavButton'
import './Nav.css'

const Nav = () => (
  <Drawer variant='permanent'>
    <NavBrand />
    <Divider className='NavDivider' />
    <NavButton />
    <Divider className='NavDivider' />
    <Link name='myDrive' to='/myDrive' exact className='LinkText'>
      <NavLink />
    </Link>
    <Divider inset className='NavDivider' />
    <Link name='deleted' to='/deleted' exact className='LinkText'>
      <NavLink delete />
    </Link>
  </Drawer>
)

export default Nav
