import React, { Component } from 'react'
import { withStyles, withTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { connect } from 'react-redux'

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

class FileModal extends Component {
  render () {
    console.log(this.props.theme)
    return (
      <Modal
        style={{ ...styles.fileModal, zIndex: this.props.theme.zIndex.modal }}
        open={this.props.fileModalOpen}
        onClose={this.props.handleFileModalClose}
      >
        <div
          style={{
            ...styles.modalContent,
            backgroundColor: this.props.theme.palette.background.default
          }}
        >
          <Typography variant='title'>
            Upload a file
          </Typography>
          <div style={styles.inputWrap}>
            <Input
              disableUnderline
              id='fileInput'
              onChange={this.props.handleFileChange}
              style={styles.input}
              title='Upload a file'
              type='file'
            />
            <Select
              value={this.props.fileLocation}
              onChange={this.props.handleFileLocationChange}
            >
              {this.props.folders &&
                this.props.folders.map(folder => (
                  <MenuItem value={folder.name}>
                    {folder.name}
                  </MenuItem>
                ))}
            </Select>
            <Button
              variant='contained'
              style={styles.button}
              onClick={this.props.addFile}
            >
              Upload
            </Button>
          </div>
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  folders: state.folders.folders
})

export default connect(mapStateToProps, null)(
  withTheme()(withStyles(styles)(FileModal))
)
