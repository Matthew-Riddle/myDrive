import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../../../../store/actions'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'
import './TrashAction.css'

class TrashAction extends Component {
  handleDeleteClick = () => {
    this.props.archiveFile(this.props.file.id)
  }

  render () {
    return (
      <div className='TrashActionContainer'>
        <Button
          size='small'
          variant='text'
          aria-label='download'
          className='button Color'
          onClick={this.handleDeleteClick}
        >
          <DeleteIcon className='TrashActionIcon' />
        </Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  archiveFile: id => dispatch(actionCreators.archiveFileAsync(id)),
  deleteFile: id => dispatch(actionCreators.deleteFileAsync(id))
})

const mapStateToProps = state => ({
  file: state.selected
})

export default connect(mapStateToProps, mapDispatchToProps)(TrashAction)
