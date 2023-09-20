import { Router } from "express";
const router = Router();

// api routes:

// post:
router.route('/register').post((req, res) => res.json('register route!'));

// get
router.route('/user').get();

// put
router.route('/editUser').put();

export default router;