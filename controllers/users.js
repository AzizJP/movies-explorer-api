const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
  NOT_FOUND_MESSAGE_USER,
  BAD_REQUEST_MESSAGE_POST_USER,
  BAD_REQUEST_MESSAGE_UPDATE_USER,
  CONFLICT_MESSAGE_USER,
} = require('../errors/errorMessages');
const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequest');
const ConflictError = require('../errors/ConflictError');
const User = require('../models/user');

const { NODE_ENV, JWT_SECRET } = process.env;

const getUserMe = (req, res, next) => User.findById(req.user._id)
  .orFail(() => next(new NotFoundError(NOT_FOUND_MESSAGE_USER)))
  .then((user) => res.send(user))
  .catch(next);

const createUser = (req, res, next) => {
  const {
    name, email, password,
  } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => User.create({
      name,
      email,
      password: hash,
    }))
    .then(() => res.send({
      data: {
        name,
        email,
      },
    }))
    .catch((err) => {
      if (err.code === 11000) {
        next(new ConflictError(CONFLICT_MESSAGE_USER));
      } else if (err.name === 'ValidationError') {
        next(new BadRequestError(BAD_REQUEST_MESSAGE_POST_USER));
      } else {
        next(err);
      }
    });
};

const updateUser = (req, res, next) => {
  const { name, email } = req.body;
  return User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    {
      new: true,
      runValidators: true,
    },
  )
    .orFail(() => next(new NotFoundError(NOT_FOUND_MESSAGE_USER)))
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(BAD_REQUEST_MESSAGE_UPDATE_USER));
      } else {
        next(err);
      }
    });
};

const login = (req, res, next) => {
  const { name, email, password } = req.body;

  return User.findUserByCredentials(name, email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', {
        expiresIn: '7d',
      });
      res.send({ token });
    })
    .catch(next);
};

module.exports = {
  getUserMe,
  createUser,
  updateUser,
  login,
};
