import React from 'react'
import styled from 'styled-components'
import EventCard from '@ui/event-card'

const EventsList = ({ events }) => (
  <EventList>
    {events.map((item) => (
      <EventCardStyled
        key={item.id}
        {...item}
      />
    ))}
  </EventList>
)

const EventList = styled.div`
  display: flex;
  flex-direction: column;
`
const EventCardStyled = styled(EventCard)`
  margin: 5px;
`

export default EventsList
