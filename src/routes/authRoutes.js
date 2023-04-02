const { Router } = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/authControllers");
const { registerValidator } = require("../validators/authValidators");
const router = Router();

router.post("/auth/login", loginController);
router.post("/auth/register", registerValidator, registerController);

module.exports = router;
