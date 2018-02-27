'use strict'

import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

const Infos = ({ date, address }) => (
  <InfosBox>
    <div>{formatDate(date)}</div>
    <p>{address}</p>
  </InfosBox>
)

const Icon = styled.span`
  margin-right: 10px;
`

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

const formatDate = (timestamp) => {
  const date = new Date(timestamp)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

export default Infos