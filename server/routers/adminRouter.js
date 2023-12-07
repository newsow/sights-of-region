const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')
const fileMiddleware = require('../middleware/file')
router.post('/login',adminController.login)
router.post('/create/admin',adminController.createAdmin)
router.post('/create/sight',fileMiddleware.single('file'),adminController.createSight)

module.exports = router