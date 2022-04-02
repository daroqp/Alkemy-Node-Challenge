const { Router } = require('express');
const { getMovies, movieDetail, postMovie, editMovie, deleteMovie } = require('../controllers/movie.controller');
const uploadFile = require('../middlewares/fileUpload.middleware');
const router = Router();

router.get('/', getMovies );
router.get('/:movie_id', movieDetail );

router.post('/create',uploadFile , postMovie );

router.put('/:movie_id', editMovie );

router.delete('/:movie_id', deleteMovie );

module.exports = router;