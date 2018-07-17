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
    const fileWidth = 160
    return (
      <GridList cellHeight='auto' spacing={0}>
        {this.props.files &&
<<<<<<< HEAD
          this.props.files.map(
            file =>
              (this.props.deleted
                ? file.deleted && file.location === this.props.currentFolder
                    ? <GridListTile
=======
          this.props.files.map(file => {
            return this.props.deleted
              ? file.deleted && file.location === this.props.currentFolder
                  ? <GridListTile
                    key={file.id}
                    cols={1}
                    style={{ width: `${fileWidth}px` }}
                    className='File'
                    >
                    <File
                      name={file.name}
                      id={file.id}
>>>>>>> 24f43f0... Adds navigation functionality to delete view
                      key={file.id}
                      cols={1}
                      style={{ width: `${fileWidth}px` }}
                      className='File'
                      >
                      <File
                        name={file.name}
                        id={file.id}
                        key={file.id}
                        location={file.location}
                        deleted={file.deleted}
                        contentType={file.contentType}
                        fileSize={file.fileSize}
                        />
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
                      <File
                        name={file.name}
                        id={file.id}
                        key={file.id}
                        location={file.location}
                        deleted={file.deleted}
                        contentType={file.contentType}
                        fileSize={file.fileSize}
                        />
                    </GridListTile>)
          )}
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
