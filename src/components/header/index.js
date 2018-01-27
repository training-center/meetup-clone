import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = ({isLoggedIn}) => (
  <Container>
    <Logo>
      <Link to='/'>
        <Img src='' alt='' />
      </Link>
    </Logo>
    {!isLoggedIn && <Button kind='clear' to='/login'>Login</Button>}
    {isLoggedIn && (
      <div>
        <Button kind='clear' to='/perfil'>Perfil</Button>
        <Button to='eventos'>Criar eventos</Button>
      </div>
    )}
  </Container>
)

const Container = styled.header`
  align-items: center;
  background: #2c3e50;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

const Logo = styled.h1`
  margin: 0;
`

const Img = styled.img`
  background: #fff;
  display: block;
  height: 30px;
  width: 100px;
`

const Button = styled(Link)`
  margin: 0;
  color: ${({kind}) => kind === 'clear' ? '#3498db' : '#fff'};
  background: ${({kind}) => kind === 'clear' ? null : '#3498db'};
  display: inline-block;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .1rem;
  text-transform: uppercase;
`


export default Header
