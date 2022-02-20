const { Router } = require('express');
const router = Router();
const { getCharacters, postCharacter } = require('../controllers/character.controller');


router.get('/', getCharacters );
router.post('/create', postCharacter );

module.exports = router;