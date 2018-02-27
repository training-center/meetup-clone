import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import formatDate from '../../utils/formatDate'

const Infos = ({ date, address }) => (
  <InfosBox>
    <div>{formatDate(date)}</div>
    <p>{address}</p>
  </InfosBox>
)

Infos.propTypes = {
  address: t.string.isRequired,
  date: t.number.isRequired
}

const InfosBox = styled.aside`
  background-color: white;
  margin: 1rem;
  padding: 1rem;
  max-width: 20rem;
  border-radius: 10%;
  > div {
    margin-bottom: 1rem;
  }
`

export default Infos
