import React from 'react'
import RestoreAction from './RestoreAction'
import { storiesOf } from '@storybook/react'

storiesOf('RestoreAction', module).add('with default', () => (
  <RestoreAction selected={{ name: 'lol' }} />
))
