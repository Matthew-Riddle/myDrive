import React from 'react'
import './ViewHeader.css'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

import ViewActions from './ViewActions/ViewActions'

const ViewHeader = props => (
  <AppBar
    className='view-header'
    position='fixed'
    color='primary'
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: '0px',
      padding: '0px',
      left: '184.11px',
      width: 'auto'
    }}
  >
    <Toolbar>
      <Typography
        variant='title'
        color='textSecondary'
        onClick={() => props.folderHandler(null)}
      >
        My Drive{` `}
      </Typography>
      <Typography
        variant='title'
        color='textSecondary'
        style={{ paddingLeft: '4px' }}
      >
        {props.currentFolder ? `> ${props.currentFolder}` : ''}
      </Typography>
    </Toolbar>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <ViewActions
        currentFolder={props.currentFolder}
        folderHandler={props.folderHandler}
      />
    </div>
  </AppBar>
)

export default ViewHeader