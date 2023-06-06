import express from 'express';

import Controller from './controller';

const router = express.Router();

router.get('/one-otp/', Controller.oneOtp);
router.post('/', Controller.createOtp);
router.get('/', Controller.allOtps);
router.put('/:id', Controller.updateOtp);
router.delete('/:id', Controller.deleteOtp);

export default router;
