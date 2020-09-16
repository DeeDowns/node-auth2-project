import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const intLoginValues = {
    username: '',
    password: ''
}

const Login = (props) => {
    console.log('hi')

    const [loginUser, setLoginUser] = useState(intLoginValues)
    const [user, setUser] = useState('')
    let history = useHistory()

    const handleChange = event => {
        setLoginUser({
            ...loginUser,
            [event.target.name]: event.target.value
        })
    }

    const login = event => {
        event.preventDefault()
        axiosWithAuth().post('/auth/login', loginUser)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            props.setLoggedIn(true)
            history.push('/users')
            
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
       <form onSubmit={login}>
            <h2>Login</h2>

            <label>Username</label>
            <input
            type='text'
            name='username'
            value={loginUser.username}
            onChange={handleChange}
            />

            <label>Password</label>
            <input
            type='password'
            name='password'
            value={loginUser.password}
            onChange={handleChange}
            />

            <button>Submit</button>
        </form>
    
    )
}

export default Login