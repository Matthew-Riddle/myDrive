import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actions'
import FolderModal from './FolderModal/FolderModal'
import FileModal from './FileModal/FileModal'
import './NavButton.css'

class NavButton extends Component {
  state = {
    anchorEl: null,
    fileModalOpen: false,
    folderModalOpen: false
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({
      anchorEl: null,
      fileModalOpen: false,
      folderModalOpen: false
    })
  }

  handleFileModalOpen = () => {
    this.setState({
      ...this.state,
      anchorEl: false,
      fileModalOpen: true
    })
  }

  handleFolderModalOpen = () => {
    this.setState({
      ...this.state,
      anchorEl: false,
      folderModalOpen: true
    })
  }

  handleFolderModalClose = () => {
    this.setState({
      ...this.state,
      fileModalOpen: false,
      folderModalOpen: false
    })
  }

  handleFileModalClose = () => {
    this.setState({
      ...this.state,
      fileModalOpen: false,
      folderModalOpen: false
    })
  }

  handleFileChange = e => {
    this.setState({ ...this.state, file: e.currentTarget.files[0] })
  }

  handleFolderChange = e => {
    this.setState({ ...this.state, folder: e.currentTarget.value })
  }

  addFile = () => {
    const formData = new FormData()
    formData.append('file', this.state.file)
    this.props.createFile(formData)
    this.setState({ ...this.state, anchorEl: false, fileModalOpen: false })
  }

  addFolder = () => {
    this.props.createFolder({
      name: this.state.folder,
      deleted: false,
      id: 0,
      location: ''
    })
    this.setState({ ...this.state, anchorEl: false, folderModalOpen: false })
  }

  render () {
    const { anchorEl } = this.state
    return (
      <div className='NavButton'>

        <Button
          variant='extendedFab'
          aria-label='navbutton'
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup='true'
          onClick={this.handleClick}
          className='button'
          fullWidth
        >
          <AddIcon className='addIcon' />
          Add
        </Button>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <MenuItem onClick={this.handleFileModalOpen}>File</MenuItem>
          <MenuItem onClick={this.handleFolderModalOpen}>Folder</MenuItem>
        </Menu>
        <FileModal
          addFile={this.addFile}
          fileModalOpen={this.state.fileModalOpen}
          handleFileChange={this.handleFileChange}
          handleFileModalClose={this.handleFileModalClose}
        />
        <FolderModal
          addFolder={this.addFolder}
          folderModalOpen={this.state.folderModalOpen}
          handleFolderChange={this.handleFolderChange}
          handleFolderModalClose={this.handleFolderModalClose}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createFile: file => dispatch(actionCreators.createFileAsync(file)),
  createFolder: folder => dispatch(actionCreators.createFolderAsync(folder))
})

export default connect(null, mapDispatchToProps)(NavButton)
