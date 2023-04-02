const UserService = require("../services/userService");

const detailController = async (req, res, next) => {
  try {
    const { email } = req.user;
    const user = await UserService.getUserByEmail(email);
    const { id, username, role } = user;
    res.status(200).json({ id, username, email, role });
  } catch (error) {
    next(error);
  }
};

const updateController = async (req, res, next) => {
  try {
    const { email } = req.user;
    // const {username , avatar} = req.body
    const data = ({ username, avatar } = req.body);
    const user = await UserService.getUserByEmail(email);
    const { id } = user;
    await UserService.updateUser(data, id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = { detailController, updateController };
