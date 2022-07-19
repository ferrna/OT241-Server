let jwt = require('jsonwebtoken')

let createToken = (datos) => {
    const payload = {
        check: true,
        email: datos.email
    }
    const token = jwt.sign(payload,process.env.PASSWORD_TOKEN,{
        expiresIn:'7d'
    })

    return token
}

module.exports = createToken