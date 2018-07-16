import React from 'react'
import { storiesOf } from '@storybook/react'

import NavLink from './NavLink'

storiesOf('NavLink', module)
  .add('with Trash', () => <NavLink delete />)
  .add('with Download', () => <NavLink />)
