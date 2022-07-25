const jwt = require('jsonwebtoken');

 const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, 'bokormas', (err, user) => {
        // console.log('jwt.verify ',err)

        if (err) return res.sendStatus(403)

        req.user = user

        next()
    })
}

exports.authenticateToken = authenticateToken

