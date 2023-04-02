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
}

module.exports = AuthService;
