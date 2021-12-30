'use strict'

const mongoose = require('mongoose')
const ach = require('express-async-handler')
const router = require('express').Router();
const Users = require('../../../models/user');	// use __base later
const Channels = require('../../../models/channel');

router.post('/create', ach(async (req, res, next) => {
	const { name, description } = req.body;
	if (!name) return res.status(400).send();
	if (await Channels.exists({ name }))
		return res.status(409).send({ error: 'Channel name already exists' });

	const ch = await Channels.create({ name, description, members: [req.usr] });
	await Users.findByIdAndUpdate(req.usr, { '$addToSet': { channels: ch._id } });

	return res.status(201).send({ uuid: ch._id });
}))

router.put('/channel/:uuid/join', ach(async (req, res, next) => {
	if (!mongoose.isValidObjectId(req.params.uuid) || !await Channels.exists({ _id: req.params.uuid }))
		return res.status(404).send({ error: 'No channel found' });

	await Promise.all([
		Channels.findByIdAndUpdate(req.params.uuid, { '$addToSet': { members: req.usr } }),
		Users.findByIdAndUpdate(req.usr, { '$addToSet': { channels: req.params.uuid } })
	]);
	return res.status(204).send();
}))

router.put('/channel/:uuid/leave', ach(async (req, res, next) => {
	if (!mongoose.isValidObjectId(req.params.uuid) || !await Channels.exists({ _id: req.params.uuid }))
		return res.status(404).send({ error: 'No channel found' });

	await Promise.all([
		Channels.findByIdAndUpdate(req.params.uuid, { '$pull': { members: req.usr } }),
		Users.findByIdAndUpdate(req.usr, { '$pull': { channels: req.params.uuid } })
	]);
	return res.status(204).send();
}))

router.get('/search', ach(async (req, res, next) => {
	const channels = (await Channels.find({ name: { $regex: req.query.str, "$options": "i" } })
		.limit(20).select('-members')).map(el => el.toObject());
	for (let ch of channels) {
		ch.uuid = ch._id;
		delete ch._id;
	}
	return res.send(channels);
}))

module.exports = router;