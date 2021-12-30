
'use strict';

const config = require('config');
const mongoose = require('mongoose')

	; (async () => {
		try {
			await mongoose.connect(config.get('mongoUrl'));
			console.log('[DB] Connected to mongodb')
		} catch (err) {
			console.log(`[DB] Failed to connect to database: ${err.message}`);
			process.exit(1);
		}
	})();

module.exports.close = async function () {
	mongoose.disconnect();
}