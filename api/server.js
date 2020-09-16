const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('../auth/authRouter')
const usersRouter = require('../users/usersRouter')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())
server.use(logger)

server.use('/users', usersRouter)
server.use('/auth', authRouter)


server.get('/', (req,res) => {
    res.json({ server: 'upppppp' })
})

function logger(req, res, next) {
    console.log(`a ${req.method} request was made to ${req.url}`) 
    next()
}

module.exports = server

