import React, { Component } from 'react'
import { Typography, Divider } from '@material-ui/core'
import ViewFolders from './ViewFolders/ViewFolders'
import ViewFiles from './ViewFiles/ViewFiles'
import ViewHeader from './ViewHeader/ViewHeader'
import './View.css'

class View extends Component {
  render () {
    return (
      <div>
        <ViewHeader />
        <div className='view'>
          <Typography
            style={{
              width: '100%',
              marginTop: '69px',
              fontWeight: 'bold',
              margin: '5px',
              textAlign: 'left'
            }}
          >
            Folders
          </Typography>
          <Divider light style={{ margin: '5px 0px' }} />
          <ViewFolders />
          <Divider style={{ margin: '5px 0px' }} />
          <Typography
            style={{
              width: '100%',
              marginTop: '69px',
              fontWeight: 'bold',
              margin: '5px',
              textAlign: 'left'
            }}
          >
            Files
          </Typography>
          <Divider light style={{ margin: '5px 0px' }} />
          <ViewFiles />
        </div>
      </div>
    )
  }
}

export default View
