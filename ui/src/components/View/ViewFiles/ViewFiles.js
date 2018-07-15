import React, { Component } from 'react'
import * as actionCreators from '../../../store/actions/fileActions'
import { connect } from 'react-redux'
import { GridList, GridListTile } from '@material-ui/core'
import File from './File/File'
import './ViewFiles.css'

class ViewFiles extends Component {
  componentDidMount () {
    this.props.getFiles()
  }

  render () {
    const fileWidth = 110
    return (
      <GridList cellHeight='auto' spacing={0}>
        {this.props.files &&
          this.props.files.map(file => {
            return this.props.deleted
              ? file.deleted
                  ? <GridListTile
                    key={file.id}
                    cols={1}
                    style={{ width: `${fileWidth}px` }}
                    className='File'
                    >
                    <File name={file.name} id={file.id} key={file.id} />
                  </GridListTile>
                  : ''
              : file.deleted || file.location !== this.props.currentFolder
                  ? ''
                  : <GridListTile
                    key={file.id}
                    cols={1}
                    style={{ width: `${fileWidth}px` }}
                    className='File'
                    >
                    <File name={file.name} id={file.id} key={file.id} />
                  </GridListTile>
          })}
      </GridList>
    )
  }
}

const mapStateToProps = state => ({
  files: state.files.files
})

const mapDispatchToProps = dispatch => ({
  getFiles: () => dispatch(actionCreators.getFilesAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewFiles)
