import { Router } from "express";
import { register, login, user, editUser} from "../controllers/appController.js";
const router = Router();

// api routes:

// post:
router.route('/register').post(register);
router.route('/login').post(login);

// get
router.route('/user/:username').get(user);

// put
router.route('/edituser').put(editUser);

export default router;