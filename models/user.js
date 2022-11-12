const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { default: isEmail } = require('validator/lib/isEmail');
const { UNAUTHORIZED_MESSAGE } = require('../errors/errorMessages');
const UnauthorizedError = require('../errors/UnauthorizedError');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
    validate: {
      validator(value) {
        if (!isEmail(value)) {
          return false;
        }
        return value;
      },
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(email, password) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnauthorizedError(UNAUTHORIZED_MESSAGE));
      }
      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          return Promise.reject(new UnauthorizedError(UNAUTHORIZED_MESSAGE));
        }
        return user;
      });
    });
};

module.exports = mongoose.model('user', userSchema);
