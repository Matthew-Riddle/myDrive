import React from 'react'
import { storiesOf } from '@storybook/react'

import FolderModal from './FolderModal'

storiesOf('FolderModal', module).add('with modal open', () => (
  <FolderModal folderModalOpen />
))
