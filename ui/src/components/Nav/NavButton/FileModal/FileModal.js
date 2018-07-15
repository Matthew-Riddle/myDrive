import React from 'react'
import Modal from '@material-ui/core/Modal'

const FileModal = props => (
  <Modal open={props.fileModalOpen} onClose={props.handleFileModalClose}>
    <form
      action='localhost:8080/files'
      method='post'
      encType='multipart/form-data'
    >
      <input
        type='file'
        class='inputModal'
        title='Upload a file'
        onChange={props.handleFileChange}
      />
      <input type='submit' onClick={props.addFile} />
    </form>
  </Modal>
)

export default FileModal
