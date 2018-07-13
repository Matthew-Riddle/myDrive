import React from 'react'
import './ViewFiles.css'
import File from './File/File'
import { GridList, GridListTile } from '@material-ui/core'
const ViewFiles = props => {
  const fileWidth = 110
  return (
    <GridList cols='auto' cellHeight='auto' spacing={0}>
      {props.files.map(slime => (
        <GridListTile cols={1} style={{ width: `${fileWidth}px` }}>
          <File name={slime} />
        </GridListTile>
      ))}
    </GridList>
  )
}
export default ViewFiles
