import express from 'express';
import * as apiv2 from '../../db/routes';

const users = express.Router();

users.get('/', async (req, res) => {
	console.log(`GET /users`);

	// TODO: Validate query
	console.log(req.body);
	const apiResponse = await apiv2.getUser()(req.body);

	res.json(apiResponse);
});

users.post('/', async (req, res) => {
	console.log(`POST /users`);

	// TODO: Validate query
	console.log(req.body);
	const apiResponse = await apiv2.postUser()(req.body);

	res.json(apiResponse);
});

users.patch('/', async (req, res) => {
	console.log(`PATCH /users`);

	// TODO: Validate query
	console.log(req.body);
	const apiResponse = await apiv2.patchUser()(req.body);

	res.json(apiResponse);
});

users.delete('/', async (req, res) => {
	console.log(`DELETE /users`);

	// TODO: Validate query
	console.log(req.body);
	const apiResponse = await apiv2.deleteUser()(req.body);

	res.json(apiResponse);
});

export default users;