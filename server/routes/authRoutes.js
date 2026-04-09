const express = require('express')
const router = express.Router()
const { signup, signin, logout, getMe } = require('../controllers/authController')
const { protect } = require('../middleware/auth')

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/logout', protect, logout)
router.get('/me', protect, getMe)

module.exports = router
