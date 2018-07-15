import React from 'react'
import { Component } from 'react'
import './DownloadAction.css'
import Button from '@material-ui/core/Button'
import DownloadIcon from '@material-ui/icons/CloudDownload'
import { connect } from 'react-redux'
import axios from '../../../../../axiosInstance'

class DownloadAction extends Component {
  // TODO: Add Download option for folder
  state = {}

  componentDidUpdate (prevProps) {
    console.log(this.props.file)
    if (
      this.props.file !== prevProps.file &&
      this.props.file.type !== 'folder'
    ) {
      this.getBlob()
    }
  }

  getBlob = () => {
    axios({
      url: `http://localhost:8080/files/download/${this.props.file.id}`,
      method: 'GET',
      responseType: 'blob'
    }).then(response => {
      this.setState({
        url: window.URL.createObjectURL(new Blob([response.data]))
      })
    })
  }

  render () {
    return (
      <div className='DownloadAction'>
        {this.props.file.name
          ? <Button
            variant='text'
            size='small'
            aria-label='download'
            className='button Color'
            href={this.state.url}
            download={this.props.file.name}
            >
            <DownloadIcon className='DownloadIcon' />
          </Button>
          : ''}

      </div>
    )
  }
}
const mapStateToProps = state => ({
  file: state.selected
})

export default connect(mapStateToProps, null)(DownloadAction)
