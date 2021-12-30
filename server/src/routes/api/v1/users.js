'use strict'

const ach = require('express-async-handler')
const router = require('express').Router();

const Users = require('../../../models/user');	// use __base later

router.get('/me', ach(async (req, res, next) => {
	const { _id: uuid, username, userphoto, channels }
		= await Users.findById(req.usr).populate('channels', 'name description');
	return res.send({ uuid, username, userphoto, channels });
}))

module.exports = router;