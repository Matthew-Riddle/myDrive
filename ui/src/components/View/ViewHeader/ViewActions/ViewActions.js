import React from 'react'
import './ViewActions.css'
import DownloadAction from './DownloadAction/DownloadAction'
import TrashAction from './TrashAction/TrashAction'
import RestoreAction from './RestoreAction/RestoreAction'

const ViewActions = props => (
  <div className='Container'>
    <DownloadAction />
    <TrashAction
      currentFolder={props.currentFolder}
      folderHandler={props.folderHandler}
    />
    <RestoreAction />
  </div>
)

export default ViewActions
