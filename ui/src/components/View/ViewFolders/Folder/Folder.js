import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import FolderIcon from '@material-ui/icons/Folder'
import { connect } from 'react-redux'
import * as actionCreators from '../../../../store/actions'

import { Typography } from '@material-ui/core'
import './Folder.css'
class Folder extends Component {
  handleCardClick = () => {
    this.props.getFolderSelected({ id: this.props.id, name: this.props.name })
  }
  render () {
    return (
      <Paper className='Folder' elevation={1} onClick={this.handleCardClick}>
        <FolderIcon className='FolderIcon' />
        <Typography className='FolderName'>{this.props.name}</Typography>
      </Paper>
    )
  }
}
// const Folder = props => (

const mapDispatchToProps = dispatch => ({
  getFolderSelected: folder =>
    dispatch(actionCreators.getFolderSelectedAsync(folder))
})

const mapStateToProps = state => ({
  selected: state.selected
})

export default connect(mapStateToProps, mapDispatchToProps)(Folder)
