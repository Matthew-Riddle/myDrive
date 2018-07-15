import React, { Component } from 'react'
import './File.css'
import { connect } from 'react-redux'
import * as actionCreators from '../../../../store/actions'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import FileIcon from '@material-ui/icons/InsertDriveFile'
import Typography from '@material-ui/core/Typography'

class File extends Component {
  handleCardClick = () => {
    this.props.getFileSelected({ id: this.props.id, name: this.props.name })
  }
  render () {
    return (
      <Card className='FileCard' onClick={this.handleCardClick}>
        <div className='FileIconContainer'>
          <FileIcon className='FileIcon' />
        </div>
        <CardContent className='FileContentContainer'>
          <Typography className='FileContent'>
            {this.props.name}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getFileSelected: file => dispatch(actionCreators.getFileSelectedAsync(file))
})

export default connect(null, mapDispatchToProps)(File)
