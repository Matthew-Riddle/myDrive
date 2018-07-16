import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import FolderIcon from '@material-ui/icons/Folder'
import { connect } from 'react-redux'
import * as actionCreators from '../../../../store/actions'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
import './Folder.css'

const styles = {
  button: {
    width: '100%'
  },
  paper: {
    width: '100%'
  }
}

class Folder extends Component {
  handleCardClick = e => {
    e.stopPropagation()
    this.props.getFolderSelected({
      id: this.props.id,
      name: this.props.name,
      deleted: this.props.deleted,
      type: 'folder'
    })
  }
  handleFolderDoubleClick = e => {
    e.stopPropagation()
    this.props.folderHandler(this.props.name)
  }

  render () {
    return (
      <Button
        variant='text'
        size='small'
        style={styles.button}
        aria-label='folderButton'
        className={`FolderButton ${this.props.selected.id === this.props.id ? 'ActiveFolder' : ''}`}
      >
        <Paper
          className='Folder'
          elevation={1}
          onClick={this.handleCardClick}
          onDoubleClick={this.handleFolderDoubleClick}
          style={styles.paper}
        >
          <FolderIcon className={`FolderIcon`} />
          <Typography className={`FolderName FolderSizing`}>
            {this.props.name}
          </Typography>
        </Paper>
      </Button>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getFolderSelected: folder =>
    dispatch(actionCreators.getFolderSelectedAsync(folder))
})

const mapStateToProps = state => ({
  selected: state.selected
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(Folder)
)
