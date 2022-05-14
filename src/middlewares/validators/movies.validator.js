const { check } = require("express-validator");
const { validateResult } = require("../../helpers/validator.helper");

const validateMovie = [
    check("title")
        .exists()
        .notEmpty()
        .withMessage("Must be filled the title field.")
        .trim(),
    check("rate")
        .exists()
        .notEmpty()
        .withMessage("Must be filled the rate field.")
        .isNumeric()
        .withMessage("This field must only contain numbers.")
        .isFloat({ min: 0, max: 5 })
        .withMessage("Rating must be a number between 0 and 5")
        .trim(),
    check("genre_id")
        .exists()
        .notEmpty()
        .withMessage("Must be contain a id.")
        .isUUID()
        .withMessage("Must be a UIID."),
    check("image").notEmpty().withMessage("Must be valid extension"),
    check("characters")
        .exists()
        .default(undefined)
        .toArray()
        .isUUID(4)
        .withMessage("Ids must only contain UUIDs.")
        .optional(),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

const validateIdMovie = [
    check("movie_id")
        .exists()
        .notEmpty()
        .withMessage("Must be contain a id.")
        .isUUID()
        .withMessage("Must be a UIID."),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

const validateFilterMovie = [
    check("title")
        .notEmpty()
        .withMessage("Must be filled the title field.")
        .trim()
        .optional(),
    check("genre_id")
        .notEmpty()
        .withMessage("Must be contain a id.")
        .isUUID()
        .withMessage("Must be a UIID.")
        .optional(),
    check("order")
        .notEmpty()
        .withMessage("Must be ASC or DESC.")
        .isIn(["ASC", "DESC"])
        .withMessage("Order does contain invalid value.")
        .trim()
        .optional(),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

module.exports = {
    validateMovie,
    validateIdMovie,
    validateFilterMovie,
};
