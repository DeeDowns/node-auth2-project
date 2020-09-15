const express = require('express')
const Users = require('./usersModel')


const router = express.Router()

router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        console.log(users)
    })
    .catch(err => {
        console.log(err)
    })
})


module.exports = router