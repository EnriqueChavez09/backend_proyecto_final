const { ProductInOrder } = require("../models");

class ProductInOrderService {
  static async createProductInCart(data) {
    try {
      const newProductInOrder = await ProductInOrder.create(data);
      return newProductInOrder;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductInOrderService;
