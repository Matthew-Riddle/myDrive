import React from 'react'
import './NavBrand.css'
import { Avatar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import UnarchiveIcon from '@material-ui/icons/Unarchive'
import { withTheme } from '@material-ui/core/styles'

const NavBrand = props => {
  const { theme } = props

  const styles = {
    avatar: {
      backgroundColor: theme.palette.primary.main
    },
    icon: {
      color: theme.palette.secondary.main
    }
  }
  console.log(...styles)
  console.log(theme)
  return (
    <div className='nav-brand'>
      <Avatar style={styles.avatar}>
        <UnarchiveIcon style={styles.icon} />
      </Avatar>
      <Typography
        style={{
          marginLeft: '5px',
          marginTop: 'auto',
          marginBottom: 'auto',
          verticalAlign: 'middle',
          fontWeight: 'bold'
        }}
      >
        MyDrive
      </Typography>
    </div>
  )
}

export default withTheme()(NavBrand)
