import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import api from '../../services/api'
import users from '../pages/Users'

const Home = ({themeToggler}) =>{

  const inputName = useRef()
  const inputEmail = useRef()
  const inputPassword = useRef()

  async function getUsers() {
    await api.post('/person', {
      name: inputName.current.value,
      email: inputEmail.current.value,
      password: inputPassword.current.value
    })

    users.getUsers()
  }

  return (
    <div>
        <div className='container'>
          <button onClick={themeToggler}>Trocar</button>
          <h1>Criar Conta</h1>
          <form>
          <input placeholder='Nome' name='name' type='text' ref={inputName}/>
          <input placeholder='E-mail' name='email' type='email' ref={inputEmail}/>
          <input placeholder='Senha' name='password' type='password' ref={inputPassword}/>
          <button type='button' onClick={getUsers}>Cadastrar</button>
          </form>
          <li>
            <Link to="/users" style={{ textDecoration: 'none' }}>
              <span>Usuários</span>
            </Link>
          </li>
        </div>
    </div>
  );
}

export default Home;