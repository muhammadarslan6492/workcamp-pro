import express from 'express';

import Controller from './controller';

const router = express.Router();

router.get('/one-user/', Controller.oneUser);
router.post('/', Controller.createUser);
router.get('/', Controller.allUser);
router.put('/:id', Controller.updateUser);
router.delete('/:id', Controller.deleteUser);

export default router;
