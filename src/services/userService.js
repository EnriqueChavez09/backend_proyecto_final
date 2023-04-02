const { User } = require("../models");

class UserService {
  static async createUser(data) {
    try {
      const newUser = await User.create(data);
      return newUser;
    } catch (error) {
      throw error;
    }
  }
  static async getUserByEmail(email) {
    try {
      const user = await User.findOne({
        where: { email },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
