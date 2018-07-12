import React from 'react'
import './Nav.css'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import NavBrand from './NavBrand/NavBrand'
import NavLink from './NavLink/NavLink'
import NavButton from './NavButton/NavButton'

const Nav = () => (
  <Drawer variant='permanent'>
    <NavBrand />
    <Divider className='NavDivider' />
    <NavButton />
    <Divider className='NavDivider' />
    <NavLink />
    <Divider inset className='NavDivider' />
    <NavLink delete />
  </Drawer>
)

export default Nav
