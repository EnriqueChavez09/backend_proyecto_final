const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");
const detailCartValidator = [
  param("id").isInt().withMessage("El id debe ser un entero"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
const addProductValidator = [
  check("cartId", "Error con el campo cartId")
    .exists()
    .withMessage("El cartId debe existir")
    .notEmpty()
    .withMessage("El cartId no debe estar vacio")
    .isInt()
    .withMessage("El cartId debe ser un número"),
  check("productId", "Error con el campo productId")
    .exists()
    .withMessage("El productId debe existir")
    .notEmpty()
    .withMessage("El productId no debe estar vacio")
    .isInt()
    .withMessage("El productId debe ser un número"),
  check("quantity", "Error con el campo quantity")
    .exists()
    .withMessage("El quantity debe existir")
    .notEmpty()
    .withMessage("El quantity no debe estar vacio")
    .isInt()
    .withMessage("El quantity debe ser un número"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
module.exports = { detailCartValidator, addProductValidator };
