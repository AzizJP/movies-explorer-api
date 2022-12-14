const router = require('express').Router();
const { login, createUser } = require('../controllers/users');
const { NotFoundController } = require('../errors/notFoundController');
const auth = require('../middlewares/auth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const { validateSignIn, validateSignUp } = require('../middlewares/validations');

router.post('/signin', validateSignIn, login);
router.post('/signup', validateSignUp, createUser);

router.use(auth);

router.use('/', usersRouter);
router.use('/', moviesRouter);
router.use('*', NotFoundController);

module.exports = router;
