const { Router } = require("express");
const authenticate = require("../middlewares/authMiddleware");
const {
  detailController,
  updateController,
} = require("../controllers/userControllers");
const { userValidator } = require("../validators/userValidators");
const router = Router();

router
  .route("/users")
  .get(authenticate, detailController)
  .patch(authenticate, userValidator, updateController);

module.exports = router;
