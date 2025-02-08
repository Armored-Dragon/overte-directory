import express from 'express';

const users = express.Router();

users.get('/', (req, res) => {
	res.json({ success: true, users: [ {} ] });
});

export default users;