let jwt = require('jsonwebtoken')

let createToken = (idUser) => {
    const payload = {
        check: true,
        id: idUser
    }
    const token = jwt.sign(payload,'juan123',{
        expiresIn:'7d'
    })

    return token
}

module.exports = createToken