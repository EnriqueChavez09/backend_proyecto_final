const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const apiRoutes = require("./routes");
const errorHandlerRouter = require("./routes/errorHandlerRoutes");
// const swaggerUi = require("swagger-ui-express");
// const swaggerDoc = require("./swagger.json");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

apiRoutes(app);
// app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
errorHandlerRouter(app);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
