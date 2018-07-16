import React from 'react'
import './ViewActions.css'
import DownloadAction from './DownloadAction/DownloadAction'
import TrashAction from './TrashAction/TrashAction'
import RestoreAction from './RestoreAction/RestoreAction'

const ViewActions = () => (
  <div className='Container'>
    <DownloadAction />
    <TrashAction />
    <RestoreAction selected={{ name: 'lol' }} />
  </div>
)

export default ViewActions
