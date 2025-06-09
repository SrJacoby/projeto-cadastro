import { useEffect, useState } from 'react'
import React from 'react'
import { Link, useLocation } from "react-router-dom"
import DarkTrashCan from '../assets/darktrashcan.svg'
import WhiteTrashCan from '../assets/whitetrashcan.svg'
import DarkLupa from '../assets/darklupa.svg'
import WhiteLupa from '../assets/whitelupa.svg'
import Moon from '../assets/moon.svg'
import Sun from '../assets/sun.svg'
import api from '../../services/api'
import { ContainerUsers, SearchBar, Card, BackButton } from './GlobalStyles'
import { useTheme } from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'
  

const Users = ({themeToggler}) => {

    const [users, setUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    //Get

    async function getUsers() {
      const usersFromApi = await api.get('/person')
      setUsers(usersFromApi.data)
    }

    //Delete

    async function deleteUsers(id) {
      await api.delete(`/person/${id}`)
      toast.success("Usuário deletado com sucesso")
      getUsers()
    }
    
    useEffect(() => {
      getUsers()
    }, [])

    //Filtro de pesquisa

    const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
    }

    const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  //Modo Escuro

  const theme = useTheme()
  const isDark = theme.mode === 'dark'

  //Mensagem de sucesso

  const location = useLocation()

  useEffect(() => {
    if(location.state?.successMessage){
      toast.success(location.state.successMessage)
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

    return (
      <ContainerUsers>
        <button className='switch-mode' onClick={themeToggler}>
          <img src={isDark ? Sun : Moon} />
        </button>
        <h1>Usuários</h1>
        <SearchBar>
          <img src={isDark ? WhiteLupa : DarkLupa} />
          <input type="text" placeholder='Buscar...' value={searchTerm} onChange={handleSearchChange}/>
        </SearchBar>
        
        {filteredUsers.map( user => (
          <Card key={user.id}>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>E-mail: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={isDark ? WhiteTrashCan : DarkTrashCan}/>
          </button>
          </Card>
        ))}

        <Link to={"/"} style={{ textDecoration: 'none' }}>
          <BackButton>Voltar</BackButton>
        </Link>
        <ToastContainer
          theme={theme.mode} 
        />
      </ContainerUsers>
    );
}

export default Users;