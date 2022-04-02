const { Router } = require('express');
const { getCharacters, postCharacter, deleteCharacter, editCharacter, characterDetail } = require('../controllers/character.controller');
const { validateCharacter,validateIdCharacter, validateFilterCharacter } = require('../middlewares/validators/characters.validator');
const uploadFile = require('../middlewares/fileUpload.middleware');
const router = Router();


router.get('/', validateFilterCharacter , getCharacters );

router.get('/:character_id', validateIdCharacter , characterDetail );

router.post('/create', uploadFile, validateCharacter , postCharacter );

router.put('/:character_id', validateCharacter , editCharacter );

router.delete('/:character_id', validateIdCharacter , deleteCharacter );

module.exports = router;