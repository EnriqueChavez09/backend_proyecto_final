const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");

const userValidator = [
  check("username", "Error con el campo username")
    .exists()
    .withMessage("El username debe existir")
    .isString()
    .withMessage("El username debe ser un string")
    .isLength({ min: 6, max: 30 })
    .withMessage("El username debe tener entre 6 y 30 caracteres"),
  check("avatar", "Error con el campo avatar")
    .exists()
    .withMessage("El avatar debe existir")
    .isString()
    .withMessage("El avatar debe ser un string"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  userValidator,
};
