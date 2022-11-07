const { Joi } = require('celebrate');

const userUpdateJoiSchema = Joi.object().keys({
  email: Joi.string().required().email(),
  name: Joi.string().required().max(30).min(2),
});

module.exports = userUpdateJoiSchema;
