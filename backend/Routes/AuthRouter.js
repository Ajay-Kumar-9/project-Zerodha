const { signup, login } = require("../Controllers/authController.js");
const {
  signUpValidation,
  loginValidation,
} = require("../Middlewares/Validation");

const router = require("express").Router();

router.post("/signup", signUpValidation, signup);
router.post("/login", loginValidation, login);

module.exports = router;
