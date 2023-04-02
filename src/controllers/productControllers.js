const ProductService = require("../services/productService");

const createController = async (req, res, next) => {
  try {
    const { name, description, price, availableQty, status, image } = req.body;
    const { id } = req.user;
    const userId = id;
    const data = {
      userId,
      name,
      description,
      price,
      availableQty,
      status,
      image,
    };
    const newProduct = await ProductService.createProduct(data);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

const listController = async (req, res, next) => {
  try {
    const { id, role } = req.user;
    const listProducts = await ProductService.listProducts(id, role);
    res.status(200).json(listProducts);
  } catch (error) {
    next(error);
  }
};

const updateController = async (req, res, next) => {
  try {
    const { description } = req.body;
    const data = {
      description,
    };
    const { id } = req.params;
    await ProductService.updateProduct(data, id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = { createController, updateController, listController };
