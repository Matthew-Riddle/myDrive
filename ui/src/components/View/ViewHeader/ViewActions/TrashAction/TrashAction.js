import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import './TrashAction.css'

class TrashAction extends Component {
  render () {
    return (
      <div className='TrashActionContainer'>
        <DeleteIcon className='TrashActionIcon' />
      </div>
    )
  }
}

export default TrashAction
