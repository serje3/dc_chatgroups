'use strict';

const crypto = require('crypto')

function hashPw(password) {
	const sha256 = crypto.createHash('sha256');
	const hash = sha256.update(password).digest('base64');
	return hash;
}

function genToken() {
	return crypto.randomBytes(32).toString('hex');
}

module.exports = { hashPw, genToken }