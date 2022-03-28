const { Router } = require('express');
const router = Router();
const { getMovies, movieDetail, postMovie, editMovie, deleteMovie } = require('../controllers/movie.controller');

router.get('/', getMovies );
router.get('/:movie_id', movieDetail );

router.post('/create', postMovie );

router.put('/:movie_id', editMovie );

router.delete('/:movie_id', deleteMovie );

module.exports = router;