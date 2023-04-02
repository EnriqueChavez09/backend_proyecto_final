const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");

const registerValidator = [
  check("username", "Error con el campo username")
    .exists()
    .withMessage("El username debe existir")
    .notEmpty()
    .withMessage("El username no debe estar vacio")
    .isString()
    .withMessage("El username debe ser un string")
    .isLength({ min: 6, max: 30 })
    .withMessage("El username debe tener entre 6 y 30 caracteres"),
  check("role", "Error con el campo role")
    .exists()
    .withMessage("El role debe existir")
    .notEmpty()
    .withMessage("El role no debe estar vacio")
    .isString()
    .withMessage("El role debe ser un string"),
  check("email", "Error con el correo electronico")
    .exists()
    .withMessage("No se encontro la propiedad email")
    .notEmpty()
    .withMessage("No se encontro un valor para el email")
    .isString()
    .isLength({ min: 7, max: 50 })
    .withMessage("EL correo debe tener una longitud entre 7 y 50 caracteres")
    .isEmail()
    .withMessage("El correo no tiene un formato correcto"),

  check("password", "Error con la contraseña")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 7 }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
const loginValidator = [
  check("email", "Error con el correo electronico")
    .exists()
    .withMessage("El email es obligatorio")
    .notEmpty()
    .withMessage("El email no debe estar vacio")
    .isString()
    .isLength({ min: 7, max: 50 })
    .withMessage("EL email debe tener una longitud entre 7 y 50 caracteres")
    .isEmail()
    .withMessage("El email no tiene un formato correcto"),
  check("password", "Error con la contraseña")
    .exists()
    .withMessage("El password es obligatorio")
    .notEmpty()
    .withMessage("El password no debe estar vacio")
    .isString()
    .withMessage("El password debe ser un string")
    .isLength({ min: 7 })
    .withMessage("El password debe tener como mínimo 7 caracteres"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  registerValidator,
  loginValidator,
};
