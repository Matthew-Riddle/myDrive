import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../../../../store/actions'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'
import './TrashAction.css'
import { withTheme } from '@material-ui/core/styles'

class TrashAction extends Component {
  handleDeleteClick = e => {
    e.stopPropagation()
    this.props.selected.deleted
      ? this.props.selected.type === 'file'
          ? this.props.deleteFile(this.props.selected.id)
          : this.handleDeleteFolder()
      : this.props.selected.type === 'file'
          ? this.props.archiveFile(this.props.selected.id)
          : this.handleArchiveFolder()
  }

  handleArchiveFolder = () => {
    this.props.archiveFolder(this.props.selected.id)
    this.props.currentFolder === this.props.selected.name &&
      this.props.folderHandler(null)
    this.props.files
      .filter(file => file.location === this.props.selected.name)
      .forEach(file => this.props.archiveFile(file.id))
  }

  handleDeleteFolder = () => {
    this.props.deleteFolder(this.props.selected.id)
    this.props.files
      .filter(file => file.location === this.props.selected.name)
      .forEach(file => this.props.cleanUpFile(file.id))
  }

  render () {
    return (
      <div className='TrashActionContainer'>
        {this.props.selected.name
          ? <Button
            size='small'
            variant='text'
            aria-label='download'
            className='button Color'
            onClick={this.handleDeleteClick}
            >
            <DeleteIcon
              className='TrashActionIcon'
              style={{ color: this.props.theme.palette.background.default }}
              />
          </Button>
          : ''}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  archiveFile: id => dispatch(actionCreators.archiveFileAsync(id)),
  deleteFile: id => dispatch(actionCreators.deleteFileAsync(id)),
  archiveFolder: id => dispatch(actionCreators.archiveFolderAsync(id)),
  deleteFolder: id => dispatch(actionCreators.deleteFolderAsync(id)),
  cleanUpFile: id => dispatch(actionCreators.cleanUpFileAsync(id))
})

const mapStateToProps = state => ({
  files: state.files.files,
  selected: state.selected
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withTheme()(TrashAction)
)
