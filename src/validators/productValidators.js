const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");

const createProductValidator = [
  check("name", "Error con el campo name")
    .exists()
    .withMessage("El name debe existir")
    .notEmpty()
    .withMessage("El name no debe estar vacio")
    .isString()
    .withMessage("El name debe ser un string"),
  check("description", "Error con el campo description")
    .exists()
    .withMessage("El description debe existir")
    .notEmpty()
    .withMessage("El description no debe estar vacio")
    .isString()
    .withMessage("El description debe ser un string"),
  check("price", "Error con el campo price")
    .exists()
    .withMessage("El price debe existir")
    .notEmpty()
    .withMessage("El price no debe estar vacio")
    .isFloat()
    .withMessage("El price debe ser un número"),
  check("availableQty", "Error con el campo availableQty")
    .exists()
    .withMessage("El availableQty debe existir")
    .notEmpty()
    .withMessage("El availableQty no debe estar vacio")
    .isInt()
    .withMessage("El availableQty debe ser un número"),
  check("status", "Error con el campo status")
    .exists()
    .withMessage("El status debe existir")
    .notEmpty()
    .withMessage("El status no debe estar vacio")
    .isString()
    .withMessage("El status debe ser un string"),
  check("image", "Error con el campo description")
    .exists()
    .withMessage("El image debe existir")
    .notEmpty()
    .withMessage("El image no debe estar vacio")
    .isString()
    .withMessage("El image debe ser un string"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
const updateProductValidator = [
  param("id").isInt().withMessage("El id debe ser un entero"),
  check("description", "Error con el campo description")
    .exists()
    .withMessage("El description debe existir")
    .notEmpty()
    .withMessage("El description no debe estar vacio")
    .isString()
    .withMessage("El description debe ser un string"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
module.exports = {
  createProductValidator,
  updateProductValidator,
};
