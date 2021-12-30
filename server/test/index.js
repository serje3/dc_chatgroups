'use strict'

const axios = require('axios')
const config = require('config')

function assert(obj1, obj2, prefix) {
	console.log(prefix +
		(JSON.stringify(obj1) == JSON.stringify(obj2)
			? ': passed'
			: `: failed: got ${obj1} instead of ${obj2}`))
}

; (async () => {
	let username = String(Math.random());

	let code;
	console.log('REGISTER TEST')
	const clUnauth = axios.create({
		baseURL: `http://127.0.0.1:${config.get('port')}`
	});
	code = await clUnauth.post('/register').catch(e => e.response.status);
	assert(code, 400, 'Missing param')
	await clUnauth.post('/register', { username, password: 'b' })
	assert(true, true, 'Registration')	// throws otherwise
	code = await clUnauth.post('/register', { username, password: 'c' }).catch(e => e.response.status);
	assert(code, 409, 'Conflict')

	console.log('\nLOGIN TEST');
	code = await clUnauth.post('/login', { username: 'v', password: 'c' }).catch(e => e.response.status);
	assert(code, 404, 'Non-existing user')
	code = await clUnauth.post('/login', { username, password: 'c' }).catch(e => e.response.status);
	assert(code, 404, 'Invalid password')
	const token = (await clUnauth.post('/login', { username, password: 'b' })).data.token;
	assert(!!token, true, 'Normal login, token redeem')
	const clAuth = axios.create({
		baseURL: `http://127.0.0.1:${config.get('port')}/api/v1`,
		headers: {
			Authorization: token
		}
	})

	console.log('\nACCESS TEST');
	code = await clUnauth.post('/abc').catch(e => e.response.status);
	assert(code, 401, 'Unauthorized')
	code = await clUnauth.post('/abc', { headers: { Authorization: 'invalid' } })
		.catch(e => e.response.status);
	assert(code, 401, 'Invalid header');
	code = await clAuth.post('/abc').catch(e => e.response.status);
	assert(code, 404, 'Access via valid token');

	console.log('\nCHANNEL CREATE TEST');
	const ch1 = (await clAuth.post('/channels/create', { name: username, description: 'asdasdasd' }));
	assert(true, true, 'Channel creation')	// throws otherwise
	code = await clAuth.post('/channels/create', { name: username, description: 'asdasdasd' }).catch(e => e.response.status);
	assert(code, 409, 'Conflict');
	const ch2 = (await clAuth.post('/channels/create', { name: username + 'a', description: 'asdasdasd' })).data.uuid;
	assert(true, true, 'Channel 2 creation')	// throws otherwise
	const ch3 = (await clAuth.post('/channels/create', { name: username + 'ab', description: 'asdasdasd' })).data.uuid;
	assert(true, true, 'Channel 3 creation')	// throws otherwise

	console.log('\nCHANNEL JOIN/LEAVE TEST');
	code = await clAuth.put('channels/channel/000/join').catch(e => e.response.status);
	assert(code, 404, 'Channel not found test');
	code = await clAuth.put('channels/channel/000/leave').catch(e => e.response.status);
	assert(code, 404, 'Channel not found test');
	await clAuth.put(`channels/channel/${ch2}/leave`);
	assert(true, true, 'Channel2 left successfully')	// throws otherwise
	await clAuth.put(`channels/channel/${ch3}/leave`);
	assert(true, true, 'Channel3 left successfully')	// throws otherwise
	await clAuth.put(`channels/channel/${ch2}/join`);
	assert(true, true, 'Channel2 rejoined successfully')	// throws otherwise

	console.log('\nCHANNEL MESSAGING TEST');
	code = await clAuth.post(`messages/channel/${ch3}/send`, { message: '1', msgType: 'text' }).catch(e => e.response.status)
	assert(code, 403, 'Send restriction until joined')
	code = await clAuth.post(`messages/channel/${ch3}/send`, { message: '1' }).catch(e => e.response.status)
	assert(code, 400, 'Missing param');
	await clAuth.post(`messages/channel/${ch2}/send`, { message: '1', msgType: 'text' })
	assert(code, 400, 'Normal send 1');
	await clAuth.post(`messages/channel/${ch2}/send`, { message: '2', msgType: 'text' })
	assert(code, 400, 'Normal send 2');
	var res = (await clAuth.get(`/messages/channel/${ch2}`)).data;
	assert(res.length, 2, 'Array length');
	assert(res[0].content + res[1].content, '12', 'Order and content preserved');

	console.log('\nGETME TEST');
	const me = (await clAuth.get(`/users/me`)).data
	assert(me.username, username, 'Username');
	assert(me.channels.length, 2, 'Channel quantity');
	assert(me.channels[0].name, username, 'Channel1 data');
	assert(me.channels[1].name, username + 'a', 'Channel2 data');

	console.log('\nCHANNEL SEARCH TEST');
	var res = await clAuth.get(`/channels/search?str=${username.substring(0, 5)}`);
	assert(res.data[0].description, 'asdasdasd', 'Search test');
	console.log('\nSearch result: ', JSON.stringify(res.data));

})();