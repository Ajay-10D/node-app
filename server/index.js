const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routers/api.router");
require("./dbConnect");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", router);
app.listen(500, () => {
  console.log("500");
});
