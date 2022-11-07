const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { validateMovieCreate, validateMovieId } = require('../middlewares/validations');

router.get('/movies', getMovies);
router.post('/movies', validateMovieCreate, createMovie);
router.delete('/movies/:movieId', validateMovieId, deleteMovie);

module.exports = router;
