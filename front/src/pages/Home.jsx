import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import users from '../pages/Users'
import { Container, Form } from './GlobalStyles'
import { useTheme } from 'styled-components'
import Moon from '../assets/moon.svg'
import Sun from '../assets/sun.svg'

const Home = ({themeToggler}) =>{

  const inputName = useRef()
  const inputEmail = useRef()
  const inputPassword = useRef()

  //Post
  
  async function getUsers() {
    await api.post('/person', {
      name: inputName.current.value,
      email: inputEmail.current.value,
      password: inputPassword.current.value
    })

    users.getUsers()
    
  }

  //Modo escuro

  const theme = useTheme()
    const isDark = theme.mode === 'dark'

  return (
    <div>
        <Container>
          <button className='switch-mode' onClick={themeToggler}>
            <img src={isDark ? Sun : Moon} />
          </button>
          <h1>Criar Conta</h1>
          <Form>
          <input placeholder='Nome' name='name' type='text' ref={inputName}/>
          <input placeholder='E-mail' name='email' type='email' ref={inputEmail}/>
          <input placeholder='Senha' name='password' type='password' ref={inputPassword}/>
          <button type='button' onClick={getUsers}>Cadastrar</button>
          </Form>
          <li>
            <Link to="/users" style={{ textDecoration: 'none' }}>
              <span>Usuários</span>
            </Link>
          </li>
        </Container>
    </div>
  );
}

export default Home;