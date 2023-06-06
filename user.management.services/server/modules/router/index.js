import express from 'express';

import UserRouter from '../user/router';

const router = express.Router();

router.use('/user', UserRouter);

router.get('/test', (req, res) => {
  return res.status(200).json({ message: 'this is test message' });
});

export default router;
