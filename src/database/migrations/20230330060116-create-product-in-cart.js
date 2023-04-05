"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ProductInCarts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cartId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Carts",
          key: "id",
        },
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.FLOAT,
      },
      status: {
        type: Sequelize.ENUM,
        values: ["GENERATED", "PURCHASED"],
        defaultValue: "GENERATED",
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ProductInCarts");
  },
};
