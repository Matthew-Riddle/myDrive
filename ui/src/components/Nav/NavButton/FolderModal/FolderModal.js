import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import Modal from '@material-ui/core/Modal'

const styles = {
  folderModal: {
    position: 'fixed',
    zIndex: 1,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'auto',
    backgroundColor: 'white',
    width: '600px',
    maxWidth: '100%',
    height: '400px',
    maxHeight: '100%'
  },
  modalContent: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%'
  },
  button: {
    marginLeft: '8px'
  }
}

const FolderModal = props => (
  <Modal
    className={props.classes.folderModal}
    disableAutoFocus
    hideBackdrop
    open={props.folderModalOpen}
    onClose={props.handleFolderModalClose}
  >
    <div style={styles.modalContent}>
      <Input
        type='text'
        placeholder='Folder name'
        title='Input folder name.'
        onChange={props.handleFolderChange}
      />
      <Button
        variant='contained'
        color='grey'
        style={styles.button}
        onClick={props.addFolder}
      >
        Create
      </Button>
    </div>
  </Modal>
)

export default withStyles(styles)(FolderModal)
