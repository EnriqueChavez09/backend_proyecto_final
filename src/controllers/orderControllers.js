const OrderService = require("../services/orderService");

const listController = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const listOrder = await OrderService.listOrder(userId);
    res.status(200).json(listOrder);
  } catch (error) {
    next(error);
  }
};

module.exports = { listController };
