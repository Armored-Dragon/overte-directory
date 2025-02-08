import express from 'express';

const domains = express.Router();

domains.get('/', (req, res) => {
	res.json({ success: true, domains: [ {} ] });
});

export default domains;