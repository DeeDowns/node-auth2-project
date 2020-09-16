const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.headers.authorization
    const secret = process.env.JWT_SECRET || 'got a secret can you keep it?'

    if(token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({ message: 'not authorized' })
            } else {
                req.jwt = decodedToken
                next()
            }
        })
    } else {
        res.status(401).json({ message: 'no token' })
    }
}