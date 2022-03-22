const { Router } = require('express');
const router = Router();
const { getMovies, movieDetail } = require('../controllers/movie.controller');

router.get('/', getMovies );
router.get('/:movie_id', movieDetail );


module.exports = router;