import express from 'express';

import Controller from './controller';

const router = express.Router();

router.get('/one-camp/', Controller.oneCamp);
router.post('/', Controller.createCamp);
router.get('/', Controller.allCamps);
router.put('/:id', Controller.updateCamp);
router.delete('/:id', Controller.deleteCamp);

export default router;
