import React from 'react'
import Paper from '@material-ui/core/Paper'
import FolderIcon from '@material-ui/icons/Folder'
import { Typography } from '@material-ui/core'
import './Folder.css'

const Folder = props => (
  <Paper className='Folder' elevation={1}>
    <FolderIcon className='FolderIcon' />
    <Typography className='FolderName'>{props.name}</Typography>
  </Paper>
)

export default Folder
