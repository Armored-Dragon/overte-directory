import express from 'express';
import * as apiv2 from '../../db/db'
import * as types from '../../db/db_types'


const domains = express.Router();

domains.get('/', async (req, res) => {

	// TODO: Validate query
	let databaseQuery : types.domainQuery = {
		id: req.body.id
	};

	const apiResponse = await apiv2.getDomains(databaseQuery)();

	res.json(apiResponse);
});

export default domains;