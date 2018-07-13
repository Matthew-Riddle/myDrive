import React from 'react'
import './File.css'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import FileIcon from '@material-ui/icons/InsertDriveFile'
import Typography from '@material-ui/core/Typography'

const File = props => (
  <Card className='FileCard'>
    <div className='FileIconContainer'>
      <FileIcon className='FileIcon' />
    </div>
    <CardContent className='FileContentContainer'>
      <Typography className='FileContent'>
        {props.name}
      </Typography>
    </CardContent>
  </Card>
)

export default File
