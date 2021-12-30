'use strict'

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	username: { type: String, required: true },
	userPhoto: String,
	pwHash: { type: String, required: true },
	channels: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'channel'
	}]
});

module.exports = mongoose.model('user', schema);