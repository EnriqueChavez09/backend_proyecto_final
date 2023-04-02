const useRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");
const productRoutes = require("./productRoutes");
const cartRoutes = require("./cartRoutes");
const apiPath = "/api/v1";
const apiRoutes = (app) => {
  app.use(apiPath, authRoutes);
  app.use(apiPath, useRoutes);
  app.use(apiPath, productRoutes);
  app.use(apiPath, cartRoutes);
};

module.exports = apiRoutes;
