const express = require("express");
const apiRoutes = require("./routes");
const errorHandlerRouter = require("./routes/errorHandlerRoutes");

require("dotenv").config();

const app = express();
app.use(express.json());

apiRoutes(app);
errorHandlerRouter(app);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
