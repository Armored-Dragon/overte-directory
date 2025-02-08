import express from 'express';


import domains from './domains';
import places from './places';
import users from './users';

const router = express.Router();

router.use('/domains', domains);
router.use('/places', places);
router.use('/users', users);

export default router;