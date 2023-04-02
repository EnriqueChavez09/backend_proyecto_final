const { Router } = require("express");
const {
  detailCartValidator,
  addProductValidator,
} = require("../validators/cartValidators");
const authenticate = require("../middlewares/authMiddleware");
const { hasRoles } = require("../middlewares/roleMiddleware");
const {
  createController,
  detailController,
  addProductController,
} = require("../controllers/cartControllers");
const router = Router();
router.get("/carts", authenticate, hasRoles("CLIENT"), createController);
router.get(
  "/carts/:id",
  authenticate,
  hasRoles("CLIENT"),
  detailCartValidator,
  detailController
);
router.post(
  "/carts/add-product",
  authenticate,
  hasRoles("CLIENT"),
  addProductValidator,
  addProductController
);

module.exports = router;
