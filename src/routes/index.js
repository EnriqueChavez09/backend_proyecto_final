const useRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");
const apiPath = "/api/v1";
const apiRoutes = (app) => {
  app.use(apiPath, authRoutes);
  //   app.use(apiPath, useRoutes);
  //   app.use(apiPath,asddzz);
  //   app.use(apiPath,zzz);
  //   app.use(apiPath,zzz);
};

module.exports = apiRoutes;
