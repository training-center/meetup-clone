import React from 'react'
import EventsList from 'components/events-list'

const Profile = () => (
  <div>
    <h2>Meus Eventos Confirmados</h2>
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

    <h2>Eventos que Organizo</h2>
    <EventsList events={[{
      id: 0,
      title: 'Meetup Training Center',
      description: 'Primeiro Meetup Training Center',
      date: new Date().valueOf(),
      canEdit: true
    },
    {
      id: 1,
      title: 'Meetup Training Center 2',
      description: 'Segundo Meetup Training Center',
      date: new Date().valueOf(),
      canEdit: true
    }]} />
  </div>
)

export default Profile
