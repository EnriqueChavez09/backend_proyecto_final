const { ProductInCart } = require("../models");

class ProductInCartService {
  static async createProductInCart(data) {
    try {
      const newProductInCart = await ProductInCart.create(data);
      return newProductInCart;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductInCartService;
