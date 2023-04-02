const jwt = require("jsonwebtoken");
require("dotenv").config();


const UserService = require("./userService");

class AuthService {
  static async register(data) {
    try {
      const newUser = await UserService.createUser(data);
      return newUser;
    } catch (error) {
      throw error;
    }
  }
  static async getToken(payload) {
    try {
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        algorithm: "HS512",
        expiresIn: "1d",
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthService;
