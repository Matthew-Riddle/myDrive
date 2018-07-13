import React from 'react'
import { storiesOf } from '@storybook/react'

import File from './File'

storiesOf('File', module)
  .add('with name', () => <File name='Test.js' />)
  .add('with overflowing text', () => (
    <File name='REALLY LONG FILENAME LOL!!!!!!!!!!!!!!!!!!!!!!!.jpg' />
  ))
