import React, { Component } from 'react'
import { Typography, Divider } from '@material-ui/core'
import ViewFolders from './ViewFolders/ViewFolders'
import ViewFiles from './ViewFiles/ViewFiles'
import ViewHeader from './ViewHeader/ViewHeader'
import './View.css'

class View extends Component {
  state = {
    currentFolder: null
  }
  folderHandler = name => {
    this.setState({ currentFolder: name })
  }
  render () {
    return (
      <div>
        <ViewHeader
          currentFolder={this.state.currentFolder}
          folderHandler={this.folderHandler}
        />
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
              folderHandler={this.folderHandler}
              currentFolder={this.state.currentFolder}
              />
            : <ViewFolders
              folderHandler={this.folderHandler}
              currentFolder={this.state.currentFolder}
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
            ? <ViewFiles deleted currentFolder={this.state.currentFolder} />
            : <ViewFiles currentFolder={this.state.currentFolder} />}
        </div>
      </div>
    )
  }
}

export default View
