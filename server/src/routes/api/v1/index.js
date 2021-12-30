'use strict'

const router = require('express').Router();

router.use('/users', require('./users'))
router.use('/channels', require('./channels'))
router.use('/messages', require('./messages'))

module.exports = router;