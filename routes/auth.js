const express = require('express')
const router = express.Router()
const { authController } = require('../controllers')

router.get(
  '/me',
  /* TODO: Acá va el middleware de verificación de token */
  authController.authenticateByToken
)

module.exports = router
