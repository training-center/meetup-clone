'use strict'

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled, { injectGlobal } from 'styled-components'
import Header from 'components/header'
import Home from 'screens/home'
import Profile from 'screens/profile'

import 'milligram'
import 'normalize.css'

const App = () => (
  <BrowserRouter>
    <div>
      <Header isLoggedIn />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/perfil' component={Profile} />
      </Switch>
      <Footer>
        &copy; 2018
      </Footer>
    </div>
  </BrowserRouter>
)

injectGlobal`
  *, :before, :after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  }
`

const Footer = styled.footer`
  background: #7f8c8d;
  color: #fafafa;
  text-align: center;
`

export default App
