const express = require("express");
const app = express();
const cors = require("cors");
const { apiResponse } = require("./middleware");
const configureRoutes = require("./route");

//middlewares
app.use(express.json());
app.use(cors());
app.use(apiResponse);
configureRoutes(app);

app.get("/", (req, res) => {
  res.send("Route is working!");
});

module.exports = app;
