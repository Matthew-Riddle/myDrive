import React, { Component } from 'react'
import { Typography, Divider } from '@material-ui/core'
import ViewFolders from './ViewFolders/ViewFolders'
import ViewFiles from './ViewFiles/ViewFiles'
import ViewHeader from './ViewHeader/ViewHeader'
import './View.css'

class View extends Component {
  render () {
    return (
      <div>
        {this.props.deleted
          ? <ViewHeader
            deleted
            currentFolder={this.props.currentFolder}
            folderHandler={this.props.folderHandler}
            />
          : <ViewHeader
            currentFolder={this.props.currentFolder}
            folderHandler={this.props.folderHandler}
            />}

        <div className='view'>
          <Typography
            style={{
              width: '100%',
              marginTop: '69px',
              fontWeight: 'bold',
              margin: '5px',
              textAlign: 'left'
            }}
          >
            Folders
          </Typography>
          <Divider light style={{ margin: '5px 0px' }} />
          {this.props.deleted
            ? <ViewFolders
              deleted
              folderHandler={this.props.folderHandler}
              currentFolder={this.props.currentFolder}
              />
            : <ViewFolders
              folderHandler={this.props.folderHandler}
              currentFolder={this.props.currentFolder}
              />}
          <Divider style={{ margin: '5px 0px' }} />
          <Typography
            style={{
              width: '100%',
              marginTop: '69px',
              fontWeight: 'bold',
              margin: '5px',
              textAlign: 'left'
            }}
          >
            Files
          </Typography>
          <Divider light style={{ margin: '5px 0px' }} />
          {this.props.deleted
            ? <ViewFiles deleted currentFolder={this.props.currentFolder} />
            : <ViewFiles currentFolder={this.props.currentFolder} />}
        </div>
      </div>
    )
  }
}

export default View
