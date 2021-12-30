'use strict';

global.__base = __dirname;

require('log-timestamp')
const config = require('config')
const express = require('express')
const bodyParser = require('body-parser')

require('./utils/db')
var app = express();

app.use(bodyParser.json())

app.use(require('./routes'))

app.use(function (err, req, res, next) {
	res.status(500).send()
	console.log(err.message);
})

var server = app.listen(config.get('port'), err => {
	if (err) {
		console.log(`[MAIN] Failed to start server: ${err.message}`);
		process.exit(1);
	}
	console.log('[MAIN] Server listening on port ' + server.address().port);
});

process.on('SIGTERM', close);
process.on('SIGINT', close);

async function close(signal) {
	console.log(`[MAIN] Exiting process: ${signal} reveived`);
	server.close(async err => {
		await db.close(signal);
		process.exit(err ? 1 : 0)
	})
}