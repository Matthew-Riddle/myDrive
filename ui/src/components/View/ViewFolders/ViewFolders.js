import React, { Component } from 'react'
import * as actionCreators from '../../../store/actions/folderActions'
import { connect } from 'react-redux'
import { GridList, Typography, GridListTile } from '@material-ui/core'
import './ViewFolders.css'

import Folder from './Folder/Folder'

class ViewFolders extends Component {
  componentDidMount () {
    this.props.getFolders()
  }

  render () {
    return (
      <Typography>
        <GridList cols='auto' cellHeight='auto' spacing={0}>
          {this.props.folders
            ? this.props.folders.map(
                folder =>
                  (folder.deleted
                    ? ''
                    : <GridListTile
                      cols={1}
                      style={{
                        width: '110px',
                        textOverflow: 'ellipsis',
                        padding: '0px'
                      }}
                      >
                      <Folder
                        name={folder.name}
                        id={folder.id}
                        key={folder.id}
                        folderHandler={this.props.folderHandler}
                        />
                    </GridListTile>)
              )
            : ''}
        </GridList>
      </Typography>
    )
  }
}

const mapStateToProps = state => ({
  folders: state.folders.folders
})

const mapDispatchToProps = dispatch => ({
  getFolders: () => dispatch(actionCreators.getFoldersAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewFolders)
