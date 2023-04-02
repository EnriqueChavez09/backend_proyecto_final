const { Product, User } = require("../models");

class ProductService {
  static async createProduct(data) {
    try {
      const newProduct = await Product.create(data);
      return newProduct;
    } catch (error) {
      throw error;
    }
  }

  static async updateProduct(data, id) {
    try {
      const product = await Product.update(data, {
        where: { id },
      });
      return product;
    } catch (error) {
      throw error;
    }
  }
  static async getProduct(id) {
    try {
      const product = await Product.findOne({
        where: { id },
      });
      return product;
    } catch (error) {
      throw error;
    }
  }
  static async listProducts(userId, role) {
    try {
      if (role === "ADMIN") {
        const listProducts = await Product.findAll({
          where: { userId },
          attributes: { exclude: ["userId"] },
        });
        return listProducts;
      } else {
        const listProducts = await Product.findAll({
          attributes: { exclude: ["userId"] },
          include: [
            {
              model: User,
              attributes: ["username", "email"],
            },
          ],
        });
        const newListProducts = [];
        listProducts.forEach((product) => {
          if (product.availableQty > 0) {
            newListProducts.push(product);
          }
        });
        return newListProducts;
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductService;
