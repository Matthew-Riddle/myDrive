import React from 'react'
import './View.css'
import {
  Typography,
  Divider,
  CssBaseline
} from '../../../node_modules/@material-ui/core'
import ViewFolders from './ViewFolders/ViewFolders'
import ViewFiles from './ViewFiles/ViewFiles'
import ViewHeader from './ViewHeader/ViewHeader'

const View = props => (
  <CssBaseline>
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
        <ViewFolders folders={props.folders} />
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
        <ViewFiles files={props.files} />
      </div>
    </div>
  </CssBaseline>
)

export default View
