import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import UserCard from './UserCard'


const Users = (props) => {
    console.log(props)
   const [users, setUsers] = useState([])
   const history = useHistory()

   const getUsers = () => {
       axiosWithAuth().get('http://localhost:4000/users')
       .then(res => {
           console.log(res)
           setUsers(res.data)
       })
       .catch(err => {
           console.log(err)
       })
   }

   useEffect(() => {
      getUsers()
   }, [])

   

   console.log(users)

    return  (
        <div>
            <h2>Users</h2>
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    )
}

export default Users