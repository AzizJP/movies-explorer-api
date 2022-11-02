const mongoose = require('mongoose');
const { regexForUrl, regexForRuWords, regexForEnWords } = require('../utils/constants');

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
        return regexForUrl.test(value);
      },
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return regexForUrl.test(value);
      },
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return regexForUrl.test(value);
      },
    },
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return regexForRuWords.test(value);
      },
    },
  },
  nameEN: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return regexForEnWords.test(value);
      },
    },
  },
});

module.exports = mongoose.model('movie', movieSchema);
