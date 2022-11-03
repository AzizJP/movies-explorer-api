const router = require('express').Router();
const { updateUser, getUserMe } = require('../controllers/users');

router.get('/users/me', getUserMe);
router.patch('/users/me', updateUser);

module.exports = router;
