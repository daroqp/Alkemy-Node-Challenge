const { Router } = require('express');
const { getMovies, movieDetail, postMovie, editMovie, deleteMovie } = require('../controllers/movie.controller');
const { validateMovie, validateIdMovie, validateFilterMovie } = require('../middlewares/validators/movies.validator')
const uploadFile = require('../middlewares/fileUpload.middleware');
const router = Router();

router.get('/', validateFilterMovie , getMovies );

router.get('/:movie_id', validateIdMovie , movieDetail );

router.post('/create', uploadFile , validateMovie , postMovie );

router.put('/:movie_id', validateIdMovie , validateMovie , editMovie );

router.delete('/:movie_id', validateIdMovie , deleteMovie );

module.exports = router;