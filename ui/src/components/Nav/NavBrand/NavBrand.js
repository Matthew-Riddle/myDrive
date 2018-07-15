import React from 'react'
import './NavBrand.css'
import { Avatar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import UnarchiveIcon from '@material-ui/icons/Unarchive'

const NavBrand = () => (
  <Typography>
    <div className='nav-brand'>
      <Avatar>
        <UnarchiveIcon />
      </Avatar>
      <p className='nav-brand-title'>MyDrive</p>
    </div>
  </Typography>
)

export default NavBrand
