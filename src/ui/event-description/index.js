'use strict'

import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import Infos from './infos'
const EventDescription = ({ title, description, date, canEdit, className, address }) => (
  <Container>
    <Header>
      <EventTitle>{title}</EventTitle>
      <div>
        <Button>confirmar</Button>
        <Button>Não vou</Button>
      </div>
    </Header>
    <Content>
      <div>
        <h4>Detalhes</h4>        
        <p>{description}</p>
      </div>
      <Infos date={date} address={address} />
    </Content>
  </Container>
)

const Container = styled.div`
  background-color: #f6f7f8;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  max-width: 100rem;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid #f6f7f8;
  border-top: 1px solid #f6f7f8;
`

const Content = styled.div`
  max-width: 100rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 5px;
  margin-right: 5px;
  > div {
    width: 70rem;
  }
`

const Button = styled.button`
  margin-left: 5px;
  padding: 5px 10px;
  line-height: 1;
  font-size: 14px;
  text-transform: none;
  height: 40px;
`

const EventTitle = styled.h2`
  margin : 0;
`

export default EventDescription 