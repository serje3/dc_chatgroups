'use strict'

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	date: { type: Date, required: true },
	content: { type: mongoose.Schema.Types.Mixed, required: true },
	type: { type: String, required: true },
	channel: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'channel'
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	}
}, { timestamps: true });

module.exports = mongoose.model('message', schema);