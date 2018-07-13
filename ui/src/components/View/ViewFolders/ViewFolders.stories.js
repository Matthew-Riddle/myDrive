import React from 'react'
import { storiesOf } from '@storybook/react'

import ViewFolders from './ViewFolders'

storiesOf('ViewFolders', module)
  .add('with 1 folder', () => <ViewFolders folders={['dis folder']} />)
  .add('with 2 folders', () => (
    <ViewFolders folders={['dis folder', 'dat folder']} />
  ))
  .add('with multiple rows', () => (
    <ViewFolders
      folders={[
        'dis folder',
        'dat folder',
        'dat other folder',
        'dis folder here',
        'dis one folder',
        'idk',
        'dis folder',
        'dat folder',
        'dat other folder',
        'dis folder here',
        'dis one folder',
        'idk',
        'dis folder',
        'dat folder',
        'dat other folder',
        'dis folder here',
        'dis one folder',
        'idk',
        'dis folder',
        'dat folder',
        'dat other folder',
        'dis folder here',
        'dis one folder',
        'idk',
        'dis folder',
        'dat folder',
        'dat other folder',
        'dis folder here',
        'dis one folder',
        'idk'
      ]}
    />
  ))
