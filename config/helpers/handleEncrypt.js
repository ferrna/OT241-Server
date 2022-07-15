const bcrypt = require('bcryptjs')


//Funcion para encriptar contraseña. Recibe una password en texto plano
const encrypt = async (password) => {
    const hash = await bcrypt.hash(password,10)

    return hash
}


//Funcion para comparar cuando el usuario se loguee: Recibe el password en texto plano del login y el has
const compare = async (password,hashPassword) =>{
    return await bcrypt.compare(password,hashPassword)
}

//EJ: compare(password,User.password)

module.exports = {
    encrypt,
    compare
}