const express = require('express')
const router = express.Router()
const sightController = require('../controllers/sightController')

router.get('/all',sightController.allSights)
router.get('/one/:id',sightController.oneSight)

module.exports = router