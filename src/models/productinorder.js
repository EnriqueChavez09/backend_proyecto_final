"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductInOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductInOrder.belongsTo(models.Product, { foreignKey: "productId" });
      ProductInOrder.belongsTo(models.Order, { foreignKey: "orderId" });
    }
  }
  ProductInOrder.init(
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProductInOrder",
    }
  );
  return ProductInOrder;
};
