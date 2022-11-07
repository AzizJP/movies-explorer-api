const { Joi } = require('celebrate');

const movieIdJoiSchema = Joi.object().keys({
  movieId: Joi.string().alphanum().length(24),
});

module.exports = movieIdJoiSchema;
