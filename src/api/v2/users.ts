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

export default users;