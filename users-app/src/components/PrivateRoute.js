import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// const PrivateRoute = props => {
//     const { children, ...rest } = props 
//     return (
//         <Route
//             {...rest}
//             render={({ location }) => {
//                 if (localStorage.getItem('token')) {
//                     return children
//                 } else if (localStorage.getItem('token') === 'loggedOut') {
//                     return <Redirect to={{ pathname: '/login', state: { from: location } }} />
//                 } else {
//                     return <Redirect to={{ pathname: '/login', state: { from: location } }} />
//                 }
//             }} 
//         />
//     )
// }


const PrivateRoute = props => {
    const token = localStorage.getItem("token")
    const { children, ...rest } = props 
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (token === 'loggedOut') {
                    return  <Redirect to={{ pathname: '/login', state: { from: location } }} />
                } else if (!token)  {
                    return  <Redirect to={{ pathname: '/login', state: { from: location } }} />
                } else {
                    return children
                }
            }} 
        />
    )
}
export default PrivateRoute