let jwt = require('jsonwebtoken')

let createToken = () => {
    const payload = {
        check: true
    }
    const token = jwt.sign(payload,'juan123',{
        expiresIn:'7d'
    })

    return token
}

module.exports = createToken