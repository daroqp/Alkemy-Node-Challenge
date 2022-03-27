const { Router } = require('express');
const router = Router();
const { getMovies, movieDetail, postMovie } = require('../controllers/movie.controller');

router.get('/', getMovies );
router.get('/:movie_id', movieDetail );

router.post('/create', postMovie );

module.exports = router;