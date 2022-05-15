const { Router } = require('express');
const { getMovies, movieDetail, postMovie, editMovie, deleteMovie } = require('../controllers/movie.controller');
const { validateMovie, validateIdMovie, validateFilterMovie } = require('../middlewares/validators/movies.validator')
const { checkAuth, checkRoleAuth } = require('../middlewares/auth.middleware') 
const uploadFile = require('../middlewares/fileUpload.middleware');
const router = Router();

router.get('/', checkAuth , checkRoleAuth(['admin', 'user']) , validateFilterMovie , getMovies );

router.get('/:movie_id', checkAuth , checkRoleAuth(['admin', 'user']) , validateIdMovie , movieDetail );

router.post('/create', checkAuth , checkRoleAuth(['admin']) , uploadFile , validateMovie , postMovie );

router.put('/:movie_id', checkAuth , checkRoleAuth(['admin']) , uploadFile , validateIdMovie , validateMovie , editMovie );

router.delete('/:movie_id', checkAuth , checkRoleAuth(['admin']) , validateIdMovie , deleteMovie );

module.exports = router;