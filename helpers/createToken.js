let jwt = require('jsonwebtoken')

let createToken = () => {
    const payload = {
        check: true
    }
    const token = jwt.sign(payload,process.env.PASSWORD_TOKEN,{
        expiresIn:'7d'
    })

    return token
}

module.exports = createToken