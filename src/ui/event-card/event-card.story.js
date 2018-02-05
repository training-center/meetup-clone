'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import EventCard from './index'

const stories = storiesOf('Event card', module)

stories.add('Event card without props', () => (
  <EventCard
    title='Meetup Training Center'
    description='Primeiro meetup do Training Center'
    link='https://google.com'
    date={new Date().valueOf()}
    image={{
      src: 'blabla',
      alt: 'blablabla'
    }}
   />
))

stories.add('Event card confirmed', () => (
  <EventCard
    confirmed
    title='Meetup Training Center'
    description='Primeiro meetup do Training Center'
    date={new Date().valueOf()}
  />
))

stories.add('Event card not confirmed', () => (
  <EventCard
    confirmed={false}
    title='Meetup Training Center'
    description='Primeiro meetup do Training Center'
    date={new Date().valueOf()}
  />
))

stories.add('Event canceled and not confirmed', () => (
  <EventCard
    canceled
    title='Meetup Training Center'
    description='Primeiro meetup do Training Center'
    date={new Date().valueOf()}
  />
))

stories.add('Event canceled and confirmed', () => (
  <EventCard
    canceled
    confirmed
    title='Meetup Training Center'
    description='Primeiro meetup do Training Center'
    date={new Date().valueOf()}
  />
))

stories.add('Event is editable', () => (
  <EventCard
    canEdit
    title='Meetup Training Center'
    description='Primeiro meetup do Training Center'
    date={new Date().valueOf()}
  />
))
