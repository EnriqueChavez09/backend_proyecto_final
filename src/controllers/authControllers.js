const AuthService = require("../services/authService");
const UserService = require("../services/userService");
const transporter = require("../utils/mailer");
require("dotenv").config();

const loginController = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const registerController = async (req, res, next) => {
  try {
    console.log(req.body);

    const { username, password, email } = req.body;
    const data = { username, password, email };
    const user = await UserService.getUserByEmail(email);
    if (user) {
      return next({
        status: 400,
        message: "Ya existe el usuario con el email ingresado",
        error: [],
      });
    }
    const newUser = AuthService.register(data);
    res.status(201).json(newUser);
    transporter.sendMail({
      from: process.env.G_USERNAME,
      to: email,
      subject: "Bienvenido a Shop Computers",
      html: `
                Gracias por ser parte de nosotros
            `,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { loginController, registerController };
