'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-router'
import Header from './index'

const stories = storiesOf('Header', module)
  .addDecorator(StoryRouter())

stories.add('When user is not logged', () => (
  <Header />
))

stories.add('When user is logged', () => (
  <Header isLoggedIn />
))
