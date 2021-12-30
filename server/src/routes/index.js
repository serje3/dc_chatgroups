'use strict';

const router = require('express').Router();

router.use(require('./auth'))
router.use('/api/v1', require('./api/v1'))

module.exports = router;