import React, { Component } from 'react'
import * as actionCreators from '../../../store/actions/folderActions'
import { connect } from 'react-redux'
import { GridList, GridListTile, Typography } from '@material-ui/core'
import './ViewFolders.css'

import Folder from './Folder/Folder'

class ViewFolders extends Component {
  componentDidMount () {
    this.props.getFolders()
  }

  render () {
    return (
      <GridList cellHeight='auto' spacing={0}>
        {this.props.folders
          ? this.props.folders.filter(
              folder => (this.props.currentFolder !== null ? '' : folder)
            ).length > 0
              ? this.props.folders.map(
                  folder =>
                    (this.props.deleted
                      ? folder.deleted
                          ? <GridListTile
                            key={folder.id}
                            cols={1}
                            style={{
                              width: '210px',
                              textOverflow: 'ellipsis',
                              padding: '0px'
                            }}
                            >
                            <Folder
                              name={folder.name}
                              id={folder.id}
                              key={folder.id}
                              deleted={folder.deleted}
                              folderHandler={this.props.folderHandler}
                              />
                          </GridListTile>
                          : ''
                      : folder.deleted
                          ? ''
                          : <GridListTile
                            key={folder.id}
                            cols={1}
                            style={{
                              width: '160px',
                              textOverflow: 'ellipsis',
                              padding: '0px'
                            }}
                            >
                            <Folder
                              name={folder.name}
                              id={folder.id}
                              key={folder.id}
                              deleted={folder.deleted}
                              folderHandler={this.props.folderHandler}
                              />
                          </GridListTile>)
                )
              : <Typography style={{ paddingLeft: '5px', textAlign: 'left' }}>
                  No subfolders exist!
                </Typography>
          : ''}
      </GridList>
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
