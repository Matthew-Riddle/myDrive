import React from 'react'
import './ViewHeader.css'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

import ViewActions from './ViewActions/ViewActions'

const ViewHeader = () => (
  <AppBar
    className='view-header'
    position='static'
    color='white'
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}
  >
    <Toolbar>
      <Typography variant='title' color='inherit'>
        My Drive
      </Typography>
    </Toolbar>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <ViewActions />
    </div>
  </AppBar>
)

export default ViewHeader
