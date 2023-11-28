const express = require("express");

const router = express.Router();
const UserControler = require("../controlers/user.controler");
const user = new UserControler();
const nameValidation = require("../middlewares/inputValidation");
router.post("/create-user", [nameValidation], user.create);
module.exports = router;
