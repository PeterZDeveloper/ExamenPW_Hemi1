const express = require("express");
const cors = require("cors");
require("dotenv").config();

const vehiculosRoutes = require("../src/routes/vehiculo.route");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/vehiculos", vehiculosRoutes);

module.exports = app;
