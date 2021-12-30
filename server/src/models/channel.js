'use strict'

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	name: { type: String, required: true },
	description: String,
	members: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	}]
});

module.exports = mongoose.model('channel', schema);