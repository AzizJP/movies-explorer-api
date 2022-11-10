const { Joi } = require('celebrate');

const movieCardIdJoiSchema = Joi.object().keys({
  movieCardId: Joi.string().alphanum().length(24),
});

module.exports = movieCardIdJoiSchema;
