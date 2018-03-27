import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/lib/param-validation';
import authCtrl from '../controllers/auth.controller';

const router = express.Router();

/** POST /api/auth/login - Returns token if correct username and password is provided */
router.route('/login').post(validate(paramValidation.login), authCtrl.login);

export default router;
