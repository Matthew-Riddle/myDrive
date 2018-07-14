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
      <GridList cols='auto' cellHeight='auto' spacing={0}>
        {this.props.files &&
          this.props.files.map(file => (
            <GridListTile cols={1} style={{ width: `${fileWidth}px` }}>
              <File name={file.name} />
            </GridListTile>
          ))}
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
