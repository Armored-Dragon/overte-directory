import express from 'express';
import * as apiv2 from '../../db/routes'
import * as types from '../../db/db_types'


const domains = express.Router();

domains.get('/', async (req, res) => {
	console.log(`GET /domains`);

	// TODO: Validate query
	console.log(req.body);
	const apiResponse = await apiv2.getDomains()(req.body);

	res.json(apiResponse);
});

domains.post('/', async (req, res) => {
	console.log(`POST /domains`);

	// TODO: Validate query

	console.log(req.body);
	const apiResponse = await apiv2.postDomain()(req.body);

	res.json(apiResponse);
});

domains.patch('/', async (req, res) => {
	console.log(`PATCH /domains`);

	// TODO: Validate query

	console.log(req.body);
	const apiResponse = await apiv2.patchDomain()(req.body);

	res.json(apiResponse);
});

domains.delete('/', async (req, res) => {
	console.log(`DELETE /domains`);

	// TODO: Validate query

	console.log(req.body);
	const apiResponse = await apiv2.deleteDomain()(req.body);

	res.json(apiResponse);
});

export default domains;