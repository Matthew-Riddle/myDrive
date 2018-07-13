import React from 'react'
import './View.css'

const View = props => (
  <div className='View'>
    {props.deleted ? <h1>Deleted View</h1> : <h1>myDrive View</h1>}
  </div>
)

export default View
