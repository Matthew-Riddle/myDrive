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
    <div className='view'>
      <ViewHeader />
      <Typography style={{ width: '100%', marginTop: '69px' }}>
        <p style={{ fontWeight: 'bold', margin: '5px 0px' }}>Folders</p>
        <Divider light style={{ margin: '5px 0px' }} />
        <ViewFolders folders={props.folders} />
        <Divider style={{ margin: '5px 0px' }} />
        <p style={{ fontWeight: 'bold', margin: '5px 0px' }}>Files</p>
        <Divider light style={{ margin: '5px 0px' }} />
        <ViewFiles files={props.files} />
      </Typography>
    </div>
  </CssBaseline>
)

export default View
