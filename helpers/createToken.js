let jwt = require('jsonwebtoken')

let createToken = (user) => {
    const payload = {
        check: true,
        ...user
    }
    const token = jwt.sign(payload,'juan123',{
        expiresIn:'7d'
    })

    return token
}

module.exports = createToken