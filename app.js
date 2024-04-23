const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const RouterHistoria = require("./router/RouterHistoria");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/HistoriaClinica", RouterHistoria);
app.use

const PORT = process.env.PORT || 5000;
app.listen(PORT);
