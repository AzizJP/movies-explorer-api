const { Joi } = require('celebrate');

const movieCardIdJoiSchema = Joi.object().keys({
  movieCardId: Joi.string().hex().length(24),
});

module.exports = movieCardIdJoiSchema;
