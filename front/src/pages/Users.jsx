import { useEffect, useState } from 'react'
import React from 'react'
import { Link } from "react-router-dom"
import TrashCan from '../assets/trashcan.svg'
import Lupa from '../assets/lupa.svg'
import './Users.css'
import api from '../../services/api'


const Users = () => {

    const [users, setUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    async function getUsers() {
      const usersFromApi = await api.get('/person')
      setUsers(usersFromApi.data)
    }

    async function deleteUsers(id) {
      await api.delete(`/person/${id}`)
      getUsers()
    }
    
    useEffect(() => {
      getUsers()
    }, [])

    const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
    }

    const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

    return (
      <div className='container-users'>
        <h1>Usuários</h1>
        <div className='search-bar'>
          <img src={Lupa} />
          <input type="text" placeholder='Buscar...' value={searchTerm} onChange={handleSearchChange}/>
        </div>
        
        {filteredUsers.map( user => (
          <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>E-mail: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={TrashCan}/>
          </button>
          </div>
        ))}

        <Link to={"/"} style={{ textDecoration: 'none' }}>
          <button id='back-button'>Voltar</button>
        </Link>
      </div>
    );
}

export default Users;