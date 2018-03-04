import React from 'react'
import { storiesOf } from '@storybook/react'
import FormattedDate from './index'

const stories = storiesOf('Formatted date', module)

stories.add('Show a date formatted', () => (
  <FormattedDate timestamp={new Date().valueOf()} />
))
