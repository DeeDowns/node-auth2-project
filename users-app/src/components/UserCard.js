import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const UserCard= (props) => {
    const { user } = props

    return  (
        <div>
            <h3>Username: {user.username}</h3>
            {user.department ?  <h4>Department: {user.department}</h4> : <h4>Department: N/A</h4>}
           
        </div>
    )
}

export default UserCard