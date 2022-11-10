const mongoose = require('mongoose');
const validator = require('validator');
const { regexForIntegerNumber, regexForRuWords, regexForEnWords } = require('../utils/constants');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return validator.isURL(value);
      },
      message: 'Ссылка не валидна',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return validator.isURL(value);
      },
      message: 'Ссылка не валидна',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return validator.isURL(value);
      },
      message: 'Ссылка не валидна',
    },
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
    validate: {
      validator(value) {
        return regexForIntegerNumber.test(value);
      },
      message: 'Число должно быть целым',
    },
  },
  nameRU: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return regexForRuWords.test(value);
      },
      message: 'Наименование должно быть на кириллице',
    },
  },
  nameEN: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return regexForEnWords.test(value);
      },
      message: 'Наименование должно быть на латинице',
    },
  },
});

module.exports = mongoose.model('movie', movieSchema);
