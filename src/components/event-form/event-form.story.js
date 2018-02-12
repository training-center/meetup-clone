'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import EventForm from './index'

const stories = storiesOf('EventForm', module)

stories.add('when user creates a event', () => (
  <EventForm />
))