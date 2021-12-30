'use strict'

const mongoose = require('mongoose')
const ach = require('express-async-handler')
const router = require('express').Router();
const Users = require('../../../models/user');	// use __base later
const Messages = require('../../../models/message');

router.post('/channel/:uuid/send', ach(async (req, res, next) => {
	const { message: content, msgType: type } = req.body;
	if (!content || !type || !mongoose.isValidObjectId(req.params.uuid))
		return res.status(400).send();

	if (!(await Users.findById(req.usr)).channels.includes(req.params.uuid))
		return res.status(403).send({ error: 'You are not a member of this channel' })

	Messages.create({
		date: Date.now(),
		content, type,
		owner: res.usr,
		channel: req.params.uuid
	});
	return res.send();
}))

router.get('/channel/:uuid', ach(async (req, res, next) => {
	if (!mongoose.isValidObjectId(req.params.uuid))
		return res.status(400).send();
	return res.send((await Messages.find({ channel: req.params.uuid }).sort({ createdAt: 1 })))
}))

module.exports = router;