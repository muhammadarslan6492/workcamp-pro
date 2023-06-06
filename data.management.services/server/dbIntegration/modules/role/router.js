import express from 'express';

import Controller from './controller';

const router = express.Router();

router.get('/one-role/', Controller.oneRole);
router.post('/', Controller.createRole);
router.get('/', Controller.allRoles);
router.put('/:id', Controller.updateRole);
router.delete('/:id', Controller.deleteRole);

export default router;
