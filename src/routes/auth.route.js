const { Router } = require("express");
const router = Router();

const {
  postAuthLogin,
  postAuthRegister,
} = require("../controllers/auth.controller");
const {
  validateUserRegister,
  validateUserLogin,
} = require("../middlewares/validators/users.validator");

router.post("/login", validateUserLogin, postAuthLogin);
router.post("/register", validateUserRegister, postAuthRegister);

module.exports = router;
