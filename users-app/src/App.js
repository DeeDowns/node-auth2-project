import React, { useState, useEffect } from 'react';
import { Link, Route, Redirect, useHistory} from 'react-router-dom'
import axios from 'axios'

import Register from './components/Register'
import Login from './components/Login'
import Users from './components/Users'
import PrivateRoute from './components/PrivateRoute'
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const history = useHistory()

  const logout = () => {
    localStorage.setItem('token', 'loggedOut')
    history.push('/login')

  }

  console.log(loggedIn)

  return (
    <div className="App">
       <header>
        <nav>
          <Link to='/register'>Register</Link>
          <Link to='/login'>Login</Link>
          <Link to='/users'>Users</Link>
          <Link onClick={logout}>Log Out</Link>
         
        </nav>
      </header>

      <Route exact path='/register'>
        <Register/>
      </Route>

      <Route exact path='/login'>
        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      </Route>

     
       <PrivateRoute exact path='/users'>
        <Users loggedIn={loggedIn} />
      </PrivateRoute>
     
    </div>
  );
}

export default App;
