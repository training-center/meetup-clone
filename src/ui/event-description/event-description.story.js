import React from 'react'
import { storiesOf } from '@storybook/react'
import EventDescription from './index'

const stories = storiesOf('Event description', module)

stories.add('Event description without props', () => (
  <EventDescription
    title='2º Hackathon Training Center CWB'
    description='Pessoal! Vai rolar o nosso Segundo Hackathon do Training Center em Curitiba, para continuar com o desenvolvimento de uma plataforma de eventos gratuita para ser usado em nossos próprios eventos, além de aproximar nossa comunidade trazendo pessoas de variadas áreas e níveis de conhecimento para a troca de conhecimento e evolução juntos.'
    date={new Date().valueOf()}
    address='Pipefy - 3° Andar - João Gualberto, Juvevê - Curitiba, PR 80030001' />
  )
)
