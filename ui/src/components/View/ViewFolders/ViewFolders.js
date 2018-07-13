import React, { Component } from 'react'
import './ViewFolders.css'
import { GridList, Typography, GridListTile } from '@material-ui/core'

import Folder from './Folder/Folder'

class ViewFolders extends Component {
  render () {
    return (
      <Typography>
        <GridList cols='auto' cellHeight='auto' spacing={10}>
          {this.props.folders.map(folder => (
            <GridListTile
              cols={1}
              style={{
                width: '110px',
                textOverflow: 'ellipsis',
                padding: '0px'
              }}
            >
              <Folder name={folder} />
            </GridListTile>
          ))}
        </GridList>
      </Typography>
    )
  }
}

export default ViewFolders
