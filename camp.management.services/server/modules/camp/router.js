import express from 'express';

import Controller from './controller';
import validate from '../shared/middleware/validators/index';

const router = express.Router();

router.post(
  '/camp-availability',
  validate.CampNameValidator,
  Controller.campNameAvalability,
);

router.post('/create-camp', validate.CreateCampValidator, Controller.creatCamp);

export default router;
