import React from 'react'
import { Component } from 'react'
import './DownloadAction.css'
import Button from '@material-ui/core/Button'
import DownloadIcon from '@material-ui/icons/CloudDownload'

class DownloadAction extends Component {
  render () {
    return (
      <div className='DownloadAction'>

        <Button
          variant='text'
          size='small'
          aria-label='download'
          className='button Color'
        >
          <DownloadIcon className='DownloadIcon' />
        </Button>
      </div>
    )
  }
}
export default DownloadAction
