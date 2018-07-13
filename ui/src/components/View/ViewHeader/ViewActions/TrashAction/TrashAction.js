import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'
import './TrashAction.css'

class TrashAction extends Component {
  render () {
    return (
      <div className='TrashActionContainer'>
        <Button
          size='small'
          variant='text'
          aria-label='download'
          className='button Color'
        >
          <DeleteIcon className='TrashActionIcon' />
        </Button>
      </div>
    )
  }
}

export default TrashAction
