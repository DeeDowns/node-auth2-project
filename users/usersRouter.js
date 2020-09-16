const express = require('express')
const Users = require('./usersModel')
const restricted = require('../auth/restrictedMiddleware')


const router = express.Router()

router.get('/', restricted, (req, res) => {
    Users.find()
    .then(users => {
        console.log(users)
        res.status(200).json(users)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: err.message })
    })
})


module.exports = router