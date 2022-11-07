const { Joi } = require('celebrate');
const { regexForUrl, regexForRuWords, regexForEnWords } = require('../utils/constants');

const createMovieJoiSchema = Joi.object().keys({
  country: Joi.string().required(),
  director: Joi.string().required(),
  duration: Joi.number().required(),
  year: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required().pattern(regexForUrl),
  trailerLink: Joi.string().required().pattern(regexForUrl),
  thumbnail: Joi.string().required().pattern(regexForUrl),
  movieId: Joi.string().required(),
  nameRU: Joi.string().required().pattern(regexForRuWords),
  nameEN: Joi.string().required().pattern(regexForEnWords),
});

module.exports = createMovieJoiSchema;
