import express from 'express';

import CampRouter from '../camp/router';

const router = express.Router();

router.use('/camp', CampRouter);

router.get('/test', (req, res) => {
  return res.status(200).json({ message: 'this is test message' });
});

export default router;
