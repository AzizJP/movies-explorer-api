const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { validateMovieCreate, validateMovieCardId } = require('../middlewares/validations');

router.get('/movies', getMovies);
router.post('/movies', validateMovieCreate, createMovie);
router.delete('/movies/:movieCardId', validateMovieCardId, deleteMovie);

module.exports = router;
