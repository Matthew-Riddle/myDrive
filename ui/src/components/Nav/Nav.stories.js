import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Nav from './Nav'
import { storiesOf } from '@storybook/react'

storiesOf('Nav', module)
  .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
  .add('with children', () => <Nav />)
