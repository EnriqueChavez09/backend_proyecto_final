const { Router } = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/authControllers");
const {
  registerValidator,
  loginValidator,
} = require("../validators/authValidators");
const router = Router();

router.post("/auth/login", loginValidator, loginController);
router.post("/auth/register", registerValidator, registerController);

module.exports = router;
