import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'

const styles = {
  fileModal: {
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
  inputWrap: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  input: {
    maxWidth: '220px'
  },
  button: {
    marginLeft: '10px'
  }
}

const FileModal = props => (
  <Modal
    className={props.classes.fileModal}
    open={props.fileModalOpen}
    onClose={props.handleFileModalClose}
  >
    <div style={styles.modalContent}>
      <Typography variant='title'>
        Upload a file
      </Typography>
      <div style={styles.inputWrap}>
        <Input
          disableUnderline
          id='fileInput'
          onChange={props.handleFileChange}
          style={styles.input}
          title='Upload a file'
          type='file'
        />
        <Button
          variant='contained'
          style={styles.button}
          onClick={props.addFile}
        >
          Upload
        </Button>
      </div>
    </div>
  </Modal>
)

export default withStyles(styles)(FileModal)
