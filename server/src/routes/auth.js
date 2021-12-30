'use strict'

const ach = require('express-async-handler')
const router = require('express').Router();
const Users = require('../models/user');
const pwTools = require(`../utils/pw-tools`)

router.post('/register', ach(async (req, res, next) => {
	const { username, userPhoto, password } = req.body;
	if (!username || !password) return res.status(400).send();
	if (await Users.exists({ username }))
		return res.status(409).send({ error: 'Username already exists' });

	await Users.create({
		username,
		userPhoto,
		pwHash: pwTools.hashPw(password)
	})
	res.status(201).send();
}))

router.post('/login', ach(async (req, res, next) => {
	const { username, password } = req.body;
	const usr = await Users.findOne({ username, pwHash: pwTools.hashPw(password) });
	if (usr) {
		const token = pwTools.genToken();
		addToken(token, usr._id);
		res.status(200).send({ token })
	}
	else res.status(404).send();
}))

router.use((req, res, next) => {
	const tk = req.get('Authorization');
	if (tk) {
		req.usr = getUser(tk);
		next();
	}
	else res.status(401).send();
});

module.exports = router;

// TODO: migrate to another session storage like redis, add invalidator
const tokens = {};
function addToken(tk, uuid) {
	tokens[tk] = uuid;
}
function getUser(tk) {
	return tokens[tk];
}