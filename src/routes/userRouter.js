const express = require('express')
const router = express.Router()

const { registerUser, getUserDetails } = require('../services/usersServices')

router.post('', registerUser)
router.get('', getUserDetails)

module.exports = router