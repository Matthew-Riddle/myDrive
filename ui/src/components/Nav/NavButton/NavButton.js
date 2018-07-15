import React from 'react'
import { Component } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Modal from '@material-ui/core/Modal'
import axios from 'axios'
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actions'
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
      fileModalOpen: true
    })
  }

  handleFolderModalOpen = () => {
    this.setState({
      ...this.state,
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
    console.log(e.currentTarget.files[0])
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
        <Modal
          open={this.state.fileModalOpen}
          onClose={this.handleFileModalClose}
        >
          <form
            action='localhost:8080/files'
            method='post'
            encType='multipart/form-data'
          >
            <input
              type='file'
              class='inputModal'
              title='Upload a file'
              onChange={this.handleFileChange}
            />
            <input type='submit' onClick={this.addFile} />
          </form>
        </Modal>
        <Modal
          open={this.state.folderModalOpen}
          onClose={this.handleFolderModalClose}
        >
          <form action='localhost:8080/folder' method='post'>
            <input
              type='text'
              class='inputModal'
              title='Input folder name.'
              onInput={this.handleFolderChange}
            />
            <input type='submit' onClick={this.addFolder} />
          </form>
        </Modal>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createFile: file => dispatch(actionCreators.createFileAsync(file)),
  createFolder: folder => dispatch(actionCreators.createFolderAsync(folder))
})

export default connect(null, mapDispatchToProps)(NavButton)
