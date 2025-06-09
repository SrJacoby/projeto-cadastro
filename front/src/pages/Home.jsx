import React from 'react'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { Container, Form } from './GlobalStyles'
import { useTheme } from 'styled-components'
import Moon from '../assets/moon.svg'
import Sun from '../assets/sun.svg'
import { ToastContainer, toast } from 'react-toastify';

const Home = ({themeToggler}) =>{

  const inputName = useRef()
  const inputEmail = useRef()
  const inputPassword = useRef()
  const navigate = useNavigate()

  //Post

  async function createUsers() {
    
    const name = inputName.current.value.trim()
    const email = inputEmail.current.value.trim()
    const password = inputPassword.current.value.trim()

    //Validação formulário vazio

    if(!name || !email || !password){
      toast.error("Por favor, preencha todos os campos.")
      return
    }

    //Validação formatação e-mail

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!emailRegex.test(email)){
      toast.error("Por favor, insira um e-mail válido.")
      return
    }

    //Validação tamanho da senha

    if (password.length < 6){
      toast.error("A senha deve ter no mínimo 6 caracteres.")
      return
    }

    try{
    await api.post('/person', {
      name,
      email,
      password
    })

    inputName.current.value = ''
    inputEmail.current.value = ''
    inputPassword.current.value = ''

    navigate('/users', { state: { successMessage: 'Usuário cadastrado com sucesso.' }})

    } catch (error) {
      //Validação e-mail duplicado
      if (error.response && error.response.status === 409){
        toast.error("E-mail já cadastrado")
      } else {
        toast.error("Erro ao cadastrar o usuário.")
      }
    }
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
          <button type='button' onClick={createUsers}>Cadastrar</button>
          </Form>
          <li>
            <Link to="/users" style={{ textDecoration: 'none' }}>
              <span>Usuários</span>
            </Link>
          </li>
        </Container>
        <ToastContainer
          theme={theme.mode}
         />
    </div>
  );
}

export default Home;