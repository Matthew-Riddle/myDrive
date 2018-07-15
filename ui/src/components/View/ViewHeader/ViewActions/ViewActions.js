import React from 'react'
import './ViewActions.css'
import DownloadAction from './DownloadAction/DownloadAction'
import TrashAction from './TrashAction/TrashAction'

const ViewActions = () => (
  <div className='Container'>
    <DownloadAction />
    <TrashAction />
  </div>
)

export default ViewActions
