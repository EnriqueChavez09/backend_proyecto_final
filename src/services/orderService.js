const { Order, ProductInOrder, Product } = require("../models");

class OrderService {
  static async createOrder(data) {
    try {
      const newOrder = await Order.create(data);
      return newOrder;
    } catch (error) {
      throw error;
    }
  }
  static async listOrder(userId) {
    try {
      const order = await Order.findAll({
        where: { userId },
        attributes: { exclude: ["updatedAt", "createdAt"] },
        include: [
          {
            model: ProductInOrder,
            attributes: {
              exclude: ["productId", "createdAt", "updatedAt"],
            },
            include: [
              {
                model: Product,
                attributes: ["id", "name", "price"],
              },
            ],
          },
        ],
      });
      return order;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderService;
