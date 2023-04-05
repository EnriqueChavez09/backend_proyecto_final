const CartService = require("../services/cartService");
const ProductInCartService = require("../services/productInCartService");
const ProductService = require("../services/productService");
const transporter = require("../utils/mailer");

const createController = async (req, res, next) => {
  try {
    const { id } = req.user;
    const userId = id;
    const newCart = await CartService.createCart({ userId });
    res.status(201).json(newCart);
  } catch (error) {
    next(error);
  }
};
const detailController = async (req, res, next) => {
  try {
    const { id: cartId } = req.params;
    const { id: userId } = req.user;
    const searchCart = await CartService.getCart(userId, cartId);
    if (!searchCart) {
      return next({
        status: 400,
        message: "No existe el cart",
        error: "User not found",
      });
    }
    const newCart = await CartService.getDetailCart(cartId);
    res.status(201).json(newCart);
  } catch (error) {
    next(error);
  }
};
const addProductController = async (req, res, next) => {
  try {
    const { cartId, productId, quantity, status } = req.body;
    const data = {
      cartId,
      productId,
      quantity,
    };
    const { id: userId } = req.user;
    const searchCart = await CartService.getCart(userId, cartId);
    if (!searchCart) {
      return next({
        status: 400,
        message: "No existe el cart",
        error: "User not found",
      });
    }
    const searchProduct = await ProductService.getProduct(productId);
    if (!searchProduct) {
      return next({
        status: 400,
        message: "No existe el product",
        error: "User not found",
      });
    }
    const newProductInCart = await ProductInCartService.createProductInCart(
      data
    );
    res.status(201).json(newProductInCart);
  } catch (error) {
    next(error);
  }
};

const cheackoutController = async (req, res, next) => {
  try {
    const { id: cartId } = req.params;
    const { id: userId, email } = req.user;
    const searchCart = await CartService.getCart(userId, cartId);
    if (!searchCart) {
      return next({
        status: 400,
        message: "No existe el cart",
        error: "User not found",
      });
    }
    await CartService.changePurchased({ status: "PURCHASED" }, cartId);
    await ProductInCartService.changePurchased({ status: "PURCHASED" }, cartId);
    res.status(204).send();
    transporter.sendMail({
      from: process.env.G_USERNAME,
      to: email,
      subject: "Compra en Shop Computers",
      html: `
                Gracias por su compra
            `,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createController,
  detailController,
  addProductController,
  cheackoutController,
};
