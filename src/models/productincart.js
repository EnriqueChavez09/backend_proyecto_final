"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductInCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductInCart.belongsTo(models.Cart, { foreignKey: "cartId" });
      ProductInCart.belongsTo(models.Product, { foreignKey: "productId" });
    }
  }
  ProductInCart.init(
    {
      cartId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProductInCart",
    }
  );
  return ProductInCart;
};
