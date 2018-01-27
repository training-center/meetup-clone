'use strict'

import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

const EventCard = ({ confirmed, canceled, title, description, link, date, image, canEdit, className }) => (
  <Container canceled={canceled} className={className}>
    {canceled && <Tag>Cancelado</Tag>}
    <EventInfo href={link}>
      <Img {...image} />
      <Content>
        <EventTitle>{title}</EventTitle>
        <EventDescription>{description}</EventDescription>
        <div>{formatDate(date)}</div>
      </Content>
    </EventInfo>

    <Buttons>
      {canEdit && <Button><Icon>&#9998;</Icon> Editar</Button>}
      {canEdit && <Button kind='danger'><Icon>&times;</Icon> Cancelar</Button>}
      {(!confirmed && !canceled && !canEdit) && <Button kind='success'><Icon>&#10003;</Icon> Eu vou :)</Button>}
      {(confirmed && !canceled && !canEdit) && <Button kind='danger'><Icon>&times;</Icon> Não vou :(</Button>}
    </Buttons>
  </Container>
)

EventCard.propTypes = {
  title: t.string.isRequired,
  description: t.string.isRequired,
  date: t.number.isRequired
}

const formatDate = (timestamp) => {
  const date = new Date(timestamp)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

const Container = styled.div`
  align-items: center;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  opacity: ${({canceled}) => !canceled ? 1 : 0.4};
  overflow: hidden;
  position: relative;
  border: 1px solid #000;
`
const Tag = styled.span`
  background: red;
  color: #fff;
  font-size: 13px;
  padding: 0 30px;
  position: absolute;
  left: -27px;
  top: 20px;
  transform: rotate(-45deg);
`

const EventInfo = styled.a`
  display: flex;
  flex-wrap: wrap;
  color: inherit;
`

const EventTitle = styled.h2`
  margin: 0;
`

const EventDescription = styled.p`
  margin: 0;
`

const Img = styled.img`
  display: block;
  background: #ccc;
  height: 150px;
  width: 150px;
`
const Content = styled.div`
  padding: 0 10px 10px 10px;
`
const Button = styled.button`
  border: 0;
  margin: 0;
  margin-left: 5px;
  padding: 5px 10px;
  line-height: 1;
  font-size: 14px;
  text-transform: none;
  height: 40px;
  background: ${({kind}) => ({
    success: '#2ecc71',
    danger: '#e74c3c'
  }[kind])}
`

const Icon = styled.span`
  font-size: 20px;
`

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default EventCard
