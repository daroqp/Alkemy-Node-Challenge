const { Router } = require('express');
const { getCharacters, postCharacter, deleteCharacter, editCharacter, characterDetail } = require('../controllers/character.controller');
const uploadFile = require('../middlewares/fileUpload.middleware');
const router = Router();


router.get('/', getCharacters );
router.get('/:character_id', characterDetail );

router.post('/create', uploadFile.single('image'), postCharacter );

router.put('/:character_id', editCharacter );

router.delete('/:character_id', deleteCharacter );

module.exports = router;