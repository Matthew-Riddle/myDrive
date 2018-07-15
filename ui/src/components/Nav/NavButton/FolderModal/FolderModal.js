import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Input from '@material-ui/core/Input'

const styles = {
  folderModal: {
    position: 'fixed',
    zIndex: 1,
    left: '40%',
    top: '40%',
    overflow: 'auto',
    backgroundColor: 'white'
  }
}

const FolderModal = props => (
  <Modal
    open={props.folderModalOpen}
    onClose={props.handleFolderModalClose}
    className={props.classes.folderModal}
    hideBackdrop
  >
    <div className='modalContent'>
      <Input
        type='text'
        className='inputModal'
        title='Input folder name.'
        onInput={props.handleFolderChange}
      />
      <Input type='submit' onClick={props.addFolder} />
    </div>
  </Modal>
)

export default withStyles(styles)(FolderModal)
