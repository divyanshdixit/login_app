import { Router } from "express";
import { register, login, user, updateUser, generateOtp, verifyOtp, resetPassword} from "../controllers/appController.js";
import { sendMail} from "../controllers/mailer.js";
import { AuthMiddleware, getLocalVariables } from "../middleware/auth.js";
const router = Router();

// api routes:

// post:
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/sendmail').post(sendMail);

// get
router.route('/user/:username').get(user);

// put
router.route('/updateuser').put(AuthMiddleware, updateUser);

// get 
router.route('/generateotp').get(AuthMiddleware, getLocalVariables, generateOtp);
router.route('/verifyotp').post(AuthMiddleware, verifyOtp);

// post:
router.route('/resetpassword').put(AuthMiddleware, resetPassword);

export default router;