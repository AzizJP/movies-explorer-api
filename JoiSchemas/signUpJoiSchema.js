const { Joi } = require('celebrate');

const signUpJoiSchema = Joi.object().keys({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
  name: Joi.string().required().max(30).min(2),
});

module.exports = signUpJoiSchema;
