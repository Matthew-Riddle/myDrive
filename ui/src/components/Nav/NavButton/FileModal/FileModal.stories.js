import React from 'react'
import { storiesOf } from '@storybook/react'

import FileModal from './FileModal'

storiesOf('FileModal', module).add('with modal open', () => (
  <FileModal fileModalOpen />
))
