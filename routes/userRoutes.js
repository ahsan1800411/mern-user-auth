const { newUser, loginUser } = require('../controllers/userControllers');

const router = require('express').Router();

router.route('/register').post(newUser);
router.route('/login').post(loginUser);

module.exports = router;
