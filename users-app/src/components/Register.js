import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const intRegValues = {
    username: '',
    password: '', 
    department: ''
}


const Register = (props) => {
    const [regUser, setRegUser] = useState(intRegValues)
    let history = useHistory()

    const handleChange = event => {
        setRegUser({
            ...regUser,
            [event.target.name]: event.target.value
        })
    }

    const register = event => {
        event.preventDefault()
        axiosWithAuth().post('/auth/register', regUser)
        .then(res => {
            console.log(res)
            history.push('/login')
            localStorage.setItem('token', res.data.token)
        })
        .catch(err => {
            console.log(err)
        })
    }


    return (
        <form onSubmit={register}>
            <h2>Register</h2>

            <label>Username</label>
            <input
            type='text'
            name='username'
            value={regUser.username}
            onChange={handleChange}
            />

            <label>Password</label>
            <input
            type='password'
            name='password'
            value={regUser.password}
            onChange={handleChange}
            />

            <label>Department</label>
            <input
            type='department'
            name='department'
            value={regUser.department}
            onChange={handleChange}
            />

            <button>Submit</button>

        </form>
    )
}

export default Register