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
  static async changePurchased(data, cartId) {
    try {
      const listItems = await ProductInCart.update(data, {
        where: { cartId },
      });
      return listItems;
    } catch (error) {
      throw error;
    }
  }
  static async getAllItems(cartId) {
    try {
      const listItems = await ProductInCart.findAll({
        where: { cartId },
        attributes: { exclude: ["cartId", "status"] },
      });
      return listItems;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductInCartService;
