const { newUser } = require('../controllers/userControllers');

const router = require('express').Router();

router.route('/create').post(newUser);

module.exports = router;
