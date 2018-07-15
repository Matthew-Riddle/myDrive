import React, { Component } from 'react'
import './File.css'
import { connect } from 'react-redux'
import * as actionCreators from '../../../../store/actions'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import FileIcon from '@material-ui/icons/InsertDriveFile'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

class File extends Component {
  handleCardClick = e => {
    e.stopPropagation()
    this.props.getFileSelected({ id: this.props.id, name: this.props.name })
  }

  render () {
    return (
      <Button
        variant='text'
        size='small'
        style={{ width: '100%' }}
        aria-label='fileButton'
        className='FileCard'
      >
        <Card
          className={`FileCard ${this.props.selected.id === this.props.id ? 'Active' : ''}`}
          onClick={this.handleCardClick}
        >
          <div className='FileIconContainer'>
            <FileIcon className='FileIcon' />
          </div>
          <CardContent className='FileContentContainer'>
            <Typography className='FileContent'>
              {this.props.name}
            </Typography>
          </CardContent>
        </Card>
      </Button>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getFileSelected: file => dispatch(actionCreators.getFileSelectedAsync(file))
})

const mapStateToProps = state => ({
  selected: state.selected
})

export default connect(mapStateToProps, mapDispatchToProps)(File)
