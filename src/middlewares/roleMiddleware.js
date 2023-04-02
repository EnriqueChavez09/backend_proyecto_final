const hasRoles = (...roles) => {
  return (req, res, next) => {
    const { role } = req.user;
    if (!roles.includes(role)) {
      return res.status(401).json({
        message: `User need one of this roles ${roles}`,
      });
    }
    next();
  };
};

module.exports = {
  hasRoles,
};
