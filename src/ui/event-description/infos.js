import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import FormattedDate from '@ui/formatted-date'
import Map from '@ui/map'


const Infos = ({ date, address }) => (
  <InfosBox>
    <div><FormattedDate timestamp={date} /></div>
    <p>{address}</p>
    <Map address={address} />
  </InfosBox>
)

Infos.propTypes = {
  address: t.string.isRequired,
  date: t.number.isRequired
}

const InfosBox = styled.aside`
  background-color: white;
  margin: .5rem;
  padding: 1rem;
  max-width: 25rem;
  border-radius: 10px;
  > div {
    margin-bottom: 1rem;
  }
`

export default Infos
