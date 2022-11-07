const { celebrate } = require('celebrate');

const signInJoiSchema = require('../JoiSchemas/signInJoiSchema');
const signUpJoiSchema = require('../JoiSchemas/signUpJoiSchema');
const userUpdateJoiSchema = require('../JoiSchemas/userUpdateJoiSchema');
const createMovieJoiSchema = require('../JoiSchemas/createMovieJoiSchema');
const movieIdJoiSchema = require('../JoiSchemas/movieIdJoiSchema');

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

const validateMovieId = celebrate({
  params: movieIdJoiSchema,
});

module.exports = {
  validateSignUp,
  validateSignIn,
  validateUserUpdate,
  validateMovieCreate,
  validateMovieId,
};
