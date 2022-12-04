const express = require("express");
const cors = require("cors");
const UserRoute = require("./src/routes/user");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const db = require("./src/models");

const app = express();
const port = 3000;
db.sequelize.sync();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API for Birthday Notification",
    version: "1.0.0",
  },
  servers: [
    {
      url: `http://localhost:${port}`,
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("Welcome to Birthday Notification");
});
app.use("/api/birthday-notification/", UserRoute);

app.listen(port, () =>
  console.log(`App listening on port http://localhost:${port}!`)
);
