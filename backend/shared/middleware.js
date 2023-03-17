const jwt = require('jsonwebtoken');

const log = require('./log');
const { signIn } = require('../services/auth.services')

module.exports = {
    logging(req, res, next) {
        log(`${req.method} ${req.url}`)
        next();
    },

    maintenance(req, res, next) {
        if (process.env.servermaintenance === true) {
            log('server is under maintenance');
            res.json({ message: 'server is under maintenance' })
        } else {
            next();
        }
    },
    validateToken(req, res, next) {
        if (req.headers && req.headers.authorization) {
            const [tokenType, token] = req.headers.authorization.split(' ');
            if (tokenType === 'Bearer' && token) {
                try {
                    req.user = jwt.verify(token, process.env.jwtkey);
                    next();
                } catch (error) {
                    log(error)
                    res.status(403).json({ message: 'user is not authorized 1' })
                }
            } else {
                res.status(403).json({ message: 'user is not authorized 2' })
            }
        } else {
            res.status(403).json({ message: 'user is not authorized 3' })
        }
    }
}



// "id": 1,
//   "name": "mohan",
//   "email": "mohan@guvi.com",
//   "password": "Mohan123",
//   "cpassword": "Mohan123"

// "id": 2,
//   "name": "test",
//   "email": "test@guvi.com",
//   "password": "Test123",
//   "cpassword": "Test123"