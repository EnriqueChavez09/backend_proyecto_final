const { Router } = require("express");
const authenticate = require("../middlewares/authMiddleware");
const { hasRoles } = require("../middlewares/roleMiddleware");
const { listController } = require("../controllers/orderControllers");
const router = Router();
router.get(
  "/orders",
  authenticate,
  hasRoles("CLIENT"),
  listController
);

module.exports = router;
