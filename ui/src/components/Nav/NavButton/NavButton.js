import React from 'react'
import { Component } from 'react'
import './NavButton.css'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Modal from '@material-ui/core/Modal'
import axios from 'axios'

class NavButton extends Component {
  state = {
    anchorEl: null,
    modalOpen: false,
    folderModalOpen: false
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null, modalOpen: false, folderModalOpen: false })
  }
  handleFileModalClose = () => {
    this.setState({ ...this.state, modalOpen: true, folderModalOpen: false })
  }

  handleFolderModalClose = () => {
    this.setState({ ...this.state, modalOpen: false, folderModalOpen: true })
  }

  handleModalClose = () => {
    this.setState({ ...this.state, modalOpen: false, folderModalOpen: false })
  }

  handleFileChange = e => {
    this.setState({ ...this.state, file: e.currentTarget.files[0] })
    console.log(e.currentTarget.files[0])
  }

  uploadFile = () => {
    const formData = new FormData()
    formData.append('file', this.state.file)
    console.log(formData)
    axios({
      url: 'http://localhost:8080/files/',
      method: 'POST',
      headers: {
        'content-type': 'multipart/form-data'
      },
      data: formData
    }).then(response => console.log(response))
  }

  handleFolderChange = e => {
    this.setState({ ...this.state, folder: e.currentTarget.value })
  }

  addFolder = () => {
    const formData = new FormData()
    formData.append('folder', this.state.folder)
    console.log(formData)
    console.log(this.state.folder)
    axios({
      url: 'http://localhost:8080/folder',
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      data: {
        deleted: true,
        id: 0,
        location: '',
        name: this.state.folder
      }
    }).then(response => console.log(response))
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
          <MenuItem onClick={this.handleFileModalClose}>File</MenuItem>
          <MenuItem onClick={this.handleFolderModalClose}>Folder</MenuItem>
        </Menu>
        <Modal open={this.state.modalOpen} onClose={this.handleModalClose}>
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
            <input type='submit' onClick={this.uploadFile} />
          </form>
        </Modal>
        <Modal
          open={this.state.folderModalOpen}
          onClose={this.handleModalClose}
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
export default NavButton
