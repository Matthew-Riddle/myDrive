import React from 'react'
import './ViewHeader.css'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

import ViewActions from './ViewActions/ViewActions'

const ViewHeader = () => (
  <AppBar
    className='view-header'
    position='fixed'
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: '0px',
      padding: '0px',
      left: '184.11px'
    }}
  >
    <Toolbar>
      <Typography variant='title' color='secondary'>
        My Drive
      </Typography>
    </Toolbar>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <ViewActions />
    </div>
  </AppBar>
)

export default ViewHeader
