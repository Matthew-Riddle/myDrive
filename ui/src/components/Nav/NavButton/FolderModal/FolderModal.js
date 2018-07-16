import React from 'react'
import { withStyles, withTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'

const styles = {
  folderModal: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    left: '50%',
    overflow: 'auto',
    justifyContent: 'center',
    position: 'fixed',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    zIndex: 1
  },
  modalContent: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '3px',
    display: 'flex',
    flexDirection: 'column',
    height: '200px',
    outline: 'none',
    justifyContent: 'space-evenly',
    width: '400px'
  },
  button: {
    marginLeft: '8px'
  }
}

const FolderModal = props => {
  return (
    <Modal
      style={{ ...styles.folderModal, zIndex: props.theme.zIndex.modal }}
      disableAutoFocus
      disableEnforceFocus
      open={props.folderModalOpen}
      onClose={props.handleFolderModalClose}
    >
      <div
        style={{
          ...styles.modalContent,
          backgroundColor: props.theme.palette.background.default
        }}
      >
        <Typography variant='title'>
          Create a folder
        </Typography>
        <div className='inputWrap'>
          <Input
            type='text'
            placeholder='Folder name'
            onChange={props.handleFolderChange}
          />
          <Button
            variant='contained'
            style={styles.button}
            onClick={props.addFolder}
          >
            Create
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default withTheme()(withStyles(styles)(FolderModal))
