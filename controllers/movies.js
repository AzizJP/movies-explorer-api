const {
  NOT_FOUND_MESSAGE_MOVIE,
  BAD_REQUEST_MESSAGE_POST_MOVIES,
  BAD_REQUEST_MESSAGE_ID,
  FORBIDDEN_MESSAGE_MOVIE,
} = require('../errors/errorMessages');
const ForbiddenError = require('../errors/ForbiddenError');
const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequest');
const Movie = require('../models/movie');

const getMovies = (req, res, next) => Movie.find({})
  .then((movies) => res.send(movies))
  .catch((err) => {
    next(err);
  });

const createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  const owner = {
    _id: req.user._id,
  };
  return Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner,
  })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(BAD_REQUEST_MESSAGE_POST_MOVIES));
      } else {
        next(err);
      }
    });
};

const deleteMovie = (req, res, next) => Movie.findById(req.params.movieCardId)
  .orFail(() => next(new NotFoundError(NOT_FOUND_MESSAGE_MOVIE)))
  .then((movie) => {
    if (String(movie.owner) !== req.user._id) {
      return next(new ForbiddenError(FORBIDDEN_MESSAGE_MOVIE));
    }
    return movie.remove().then(() => res.send({ message: 'Карточка с фильмом удалена' }));
  })
  .catch((err) => {
    if (err.name === 'CastError') {
      next(new BadRequestError(BAD_REQUEST_MESSAGE_ID));
    } else {
      next(err);
    }
  });

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
