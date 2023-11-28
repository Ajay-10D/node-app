const BaseControler = require("./base.controler");
const userModel = require("../models/user.model");
class userControler extends BaseControler {
  constructor() {
    super(userModel);
  }
}
module.exports = userControler;
