import express from 'express';

const router = express.Router();

router.get('/test', (req, res) => {
  return res.status(200).json({ message: 'this is test message' });
});

export default router;
