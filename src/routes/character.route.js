const { Router } = require('express');
const { getCharacters, postCharacter, deleteCharacter, editCharacter, characterDetail } = require('../controllers/character.controller');
const { validateCharacter,validateIdCharacter, validateFilterCharacter } = require('../middlewares/validators/characters.validator');
const { checkAuth, checkRoleAuth } = require('../middlewares/auth.middleware')
const uploadFile = require('../middlewares/fileUpload.middleware');
const router = Router();


router.get('/', checkAuth , checkRoleAuth(['admin', 'user']) , validateFilterCharacter , getCharacters );

router.get('/:character_id', checkRoleAuth(['admin', 'user']) , checkAuth , validateIdCharacter , characterDetail );

router.post('/create', checkAuth , checkRoleAuth(['admin']) , uploadFile, validateCharacter , postCharacter );

router.put('/:character_id', checkRoleAuth(['admin']) , checkAuth , validateCharacter , editCharacter );

router.delete('/:character_id', checkAuth , checkRoleAuth(['admin']) , validateIdCharacter , deleteCharacter );

module.exports = router;