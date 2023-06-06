import express from 'express';

import UserRuter from '../modules/user/router';
import CampRouter from '../modules/camp/router';
import OTPRouter from '../modules/otp/router';
import RoleRouter from '../modules/role/router';

const router = express.Router();

router.use('/user', UserRuter);
router.use('/camp', CampRouter);
router.use('/otp', OTPRouter);
router.use('/role', RoleRouter);

export default router;
