const router = require('express').Router();
const { updateUser, getUserMe } = require('../controllers/users');
const { validateUserUpdate } = require('../middlewares/validations');

router.get('/users/me', getUserMe);
router.patch('/users/me', validateUserUpdate, updateUser);

module.exports = router;
