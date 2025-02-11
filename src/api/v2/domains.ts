import express from 'express';
import * as apiv2 from '../../db/db'
import * as types from '../../db/db_types'


const domains = express.Router();

domains.get('/', async (req, res) => {
	console.log(`GET /domains`);

	// TODO: Validate query
	console.log(req.body);
	const apiResponse = await apiv2.getDomains(req.body)(req.body);

	res.json(apiResponse);
});


domains.post('/', async (req, res) => {
	console.log(`POST /domains`);

	// TODO: Validate query

	console.log(req.body);
	const apiResponse = await apiv2.postDomain(req.body)(req.body);

	res.json(apiResponse);
});

export default domains;