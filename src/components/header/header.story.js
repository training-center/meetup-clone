'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from './index'

const stories = storiesOf('Header', module)

stories.add('When user is not logged', () => (
  <Header />
))

stories.add('When user is logged', () => (
  <Header isLoggedIn />
))
