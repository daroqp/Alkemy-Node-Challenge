const { check } = require('express-validator');
const { validateResult } = require('../../helpers/validator.helper');

const validateCharacter = [
    check('name')
        .exists()
        .notEmpty()
        .withMessage("Must be filled the name field.")
        .isAlpha()
        .withMessage('Must be only alphabetical chars.')
        .trim(),
    check('weight')
        .exists()
        .notEmpty()
        .withMessage("Must be filled the weight field.")
        .isNumeric()
        .withMessage("This field must only contain numbers.")
        .trim(),
    check('age')
        .exists()
        .notEmpty()
        .withMessage("Must be filled the age field.")
        .isNumeric()
        .withMessage("This field must only contain numbers.")
        .trim(),
    check('history')
        .exists()
        .notEmpty()
        .withMessage("Must be filled the history field."),
    check('movies_ids')
        .exists()
        .custom(arr => arr instanceof Array && !arr.some(x => !isUUID(x, '4')))
        .withMessage("Ids must only contain UUIDs.")
        .optional(),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

const validateIdCharacter = [
    check('character_id')
        .exists()
        .notEmpty()
        .withMessage("Must be contain a id.")
        .isUUID()
        .withMessage("Must be a UIID."),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

const validateFilterCharacter = [
    check('name')
        .isAlpha()
        .withMessage('Must be only alphabetical chars.')
        .trim()
        .optional(),
    check('age')
        .isNumeric()
        .withMessage("This field must only contain numbers.")
        .trim()
        .optional(),
    check('weight')
        .isNumeric()
        .withMessage("This field must only contain numbers.")
        .trim()
        .optional(),
    check('movies')
        .isUUID()
        .withMessage("Must be a UIID.")
        .optional(),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

module.exports = {
    validateCharacter,
    validateIdCharacter,
    validateFilterCharacter,
}