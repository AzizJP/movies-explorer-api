const { celebrate } = require('celebrate');

const signInJoiSchema = require('../JoiSchemas/signInJoiSchema');
const signUpJoiSchema = require('../JoiSchemas/signUpJoiSchema');
const userUpdateJoiSchema = require('../JoiSchemas/userUpdateJoiSchema');
const createMovieJoiSchema = require('../JoiSchemas/createMovieJoiSchema');
const movieCardIdJoiSchema = require('../JoiSchemas/movieCardIdJoiSchema');

const validateSignUp = celebrate({
  body: signUpJoiSchema,
});

const validateSignIn = celebrate({
  body: signInJoiSchema,
});

const validateUserUpdate = celebrate({
  body: userUpdateJoiSchema,
});

const validateMovieCreate = celebrate({
  body: createMovieJoiSchema,
});

const validateMovieCardId = celebrate({
  params: movieCardIdJoiSchema,
});

module.exports = {
  validateSignUp,
  validateSignIn,
  validateUserUpdate,
  validateMovieCreate,
  validateMovieCardId,
};
