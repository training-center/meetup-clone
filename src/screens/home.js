'use strict'

import React from 'react'
import EventsList from 'components/events-list'

const Home = () => (
  <EventsList events={[{
    id: 0,
    title: 'Meetup Training Center',
    description: 'Primeiro Meetup Training Center',
    date: new Date().valueOf()
  },
  {
    id: 1,
    title: 'Meetup Training Center 2',
    description: 'Segundo Meetup Training Center',
    date: new Date().valueOf()
  }]} />
)

export default Home
