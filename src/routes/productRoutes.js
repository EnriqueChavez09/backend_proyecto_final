const { Router } = require("express");
const authenticate = require("../middlewares/authMiddleware");
const {
  listController,
  updateController,
  createController,
} = require("../controllers/productControllers");
const { hasRoles } = require("../middlewares/roleMiddleware");
const {
  createProductValidator,
  updateProductValidator,
} = require("../validators/productValidators");

const router = Router();
router.patch(
  "/products/:id",
  authenticate,
  hasRoles("ADMIN"),
  updateProductValidator,
  updateController
);

router
  .route("/products")
  .get(authenticate, hasRoles("CLIENT", "ADMIN"), listController)
  .post(
    authenticate,
    hasRoles("ADMIN"),
    createProductValidator,
    createController
  );

module.exports = router;
