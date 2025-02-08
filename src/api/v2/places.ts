import express from 'express';

const places = express.Router();

places.get('/', (req, res) => {
	res.json({ success: true, places: [ {} ] });
});

export default places;