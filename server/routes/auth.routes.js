import { Router } from 'express';
import * as AuthController from '../controllers/auth.controller';
const router = new Router();

// Login
router.route('/auth/login').post(AuthController.login);
router.route('/auth/logout').post(AuthController.logout);

export default router;
