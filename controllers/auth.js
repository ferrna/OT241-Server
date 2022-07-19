const { User } = require('../models')

const authenticateByToken = async (req, res) => {
  const { email } = req.user

  let user = await User.findOne({
    where: {
      email,
    },
  })

  if (!user)
    return res.status(401).json({ errors: [{ msg: 'Token inválido' }] })

  delete user.password

  res.status(200).json({ user })
}

module.exports = {
  authenticateByToken,
}
