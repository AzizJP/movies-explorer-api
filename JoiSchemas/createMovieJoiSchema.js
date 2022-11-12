const { Joi } = require('celebrate');
const validator = require('validator');
const { regexForRuWords, regexForEnWords } = require('../utils/constants');

const createMovieJoiSchema = Joi.object().keys({
  country: Joi.string().required(),
  director: Joi.string().required(),
  duration: Joi.number().required(),
  year: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required().custom((value, helpers) => {
    if (validator.isURL(value)) {
      return value;
    }
    return helpers.message('Ссылка не валидна');
  }),
  trailerLink: Joi.string().required().custom((value, helpers) => {
    if (validator.isURL(value)) {
      return value;
    }
    return helpers.message('Ссылка не валидна');
  }),
  thumbnail: Joi.string().required().custom((value, helpers) => {
    if (validator.isURL(value)) {
      return value;
    }
    return helpers.message('Ссылка не валидна');
  }),
  movieId: Joi.number().integer().positive().required(),
  nameRU: Joi.string().required().pattern(regexForRuWords),
  nameEN: Joi.string().required().pattern(regexForEnWords),
});

module.exports = createMovieJoiSchema;
