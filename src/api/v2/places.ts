import express from 'express';
import * as apiv2 from '../../db/routes';

const places = express.Router();

places.get('/', async (req, res) => {
	console.log(`GET /places`);

	// TODO: Validate query
	console.log(req.body);
	const apiResponse = await apiv2.getPlace()(req.body);

	res.json(apiResponse);
});

places.post('/', async (req, res) => {
	console.log(`POST /places`);

	// TODO: Validate query
	console.log(req.body);
	const apiResponse = await apiv2.postPlace()(req.body);

	res.json(apiResponse);
});

export default places;