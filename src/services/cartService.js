const { Cart, ProductInCart, Product } = require("../models");

class CartService {
  static async createCart(data) {
    try {
      const newCart = await Cart.create(data);
      return newCart;
    } catch (error) {
      throw error;
    }
  }
  static async getCart(userId, id) {
    try {
      const cart = await Cart.findOne({
        where: { userId, id },
      });
      return cart;
    } catch (error) {
      throw error;
    }
  }
  static async getDetailCart(id) {
    try {
      const cart = await Cart.findByPk(id, {
        attributes: { exclude: ["updatedAt", "createdAt"] },
        include: [
          {
            model: ProductInCart,
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
      return cart;
    } catch (error) {
      throw error;
    }
  }
  static async changePurchased(data, id) {
    try {
      const cart = await Cart.update(data, {
        where: { id },
      });
      return cart;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = CartService;
