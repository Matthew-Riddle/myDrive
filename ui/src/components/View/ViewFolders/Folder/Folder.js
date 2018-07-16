import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import FolderIcon from '@material-ui/icons/Folder'
import { connect } from 'react-redux'
import * as actionCreators from '../../../../store/actions'
import { withStyles, withTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
import './Folder.css'

const styles = {
  paper: {
    width: '100%',
    backgroundColor: 'transparent'
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
    console.log(this.props.theme)
    return (
      <Paper
        className='Folder'
        elevation={1}
        onClick={this.handleCardClick}
        onDoubleClick={this.handleFolderDoubleClick}
        style={styles.paper}
      >
        <Button
          variant='text'
          size='small'
          style={{
            width: '100%',
            backgroundColor: this.props.theme.palette.background.paper
          }}
          aria-label='folderButton'
          className={`FolderButton ${this.props.selected.id === this.props.id ? 'ActiveFolder' : ''}`}
        >
          <FolderIcon className={`FolderIcon`} />
          <Typography className={`FolderName FolderSizing`}>
            {this.props.name}
          </Typography>{' '}
        </Button>
      </Paper>
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
  withTheme()(withStyles(styles)(Folder))
)
