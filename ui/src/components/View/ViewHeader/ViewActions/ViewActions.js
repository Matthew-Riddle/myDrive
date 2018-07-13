import React from 'react'
import './ViewActions.css'
import Grid from '@material-ui/core/Grid'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import DownloadAction from './DownloadAction/DownloadAction'
import TrashAction from './TrashAction/TrashAction'

const ViewActions = () => (
  <div className='Container'>
    <DownloadAction />
    <TrashAction />
  </div>
)

export default ViewActions
