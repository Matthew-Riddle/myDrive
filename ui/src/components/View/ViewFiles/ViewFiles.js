import React from 'react'
import './ViewFiles.css'
import File from './File/File'
import { GridList, GridListTile } from '@material-ui/core'
const ViewFiles = props => {
  const fileWidth = 55
  return (
    <GridList cols='auto' cellHeight='auto' spacing={10}>
      {props.Files.map(slime => (
        <GridListTile cols={1} style={{ width: `${fileWidth}px` }}>
          <File name={slime} />
        </GridListTile>
      ))}
    </GridList>
  )
}
export default ViewFiles
