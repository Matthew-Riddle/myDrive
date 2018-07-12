import React from 'react'
import { storiesOf } from '@storybook/react'

import Folder from './Folder'

storiesOf('Folder', module).add('with name', () => <Folder name='Folder' />)
