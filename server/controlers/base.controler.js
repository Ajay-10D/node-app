const bcrypt = require("bcrypt");
const errorHandler = require("../middlewares/error");
class BaseControler {
  constructor(model, type) {
    this.model = model;
    this.type = type;
  }

  create = async (req, res) => {
    try {
      const err = errorHandler(req, res);
      if (!err?.sts) {
        res.status(200).json(err);
      } else {
        let { body } = req;
        const isAlreadyExist = await this.model.findOne({ email: body.email });
        if (isAlreadyExist)
          return res
            .status(200)
            .json({ sts: false, msg: "User Already Registered!" });
        body.password = await bcrypt.hash(body.password, 10);
        const createUser = await this.model.create(body);
        if (createUser)
          return res.status(400).json({
            sts: true,
            msg: "success",
            data: createUser,
            error: [],
          });
      }
    } catch (err) {
      return res.status(400).json({
        sts: false,
        msg: "Failed to creat",
        data: [],
        error: err.message,
      });
    }
  };
}
module.exports = BaseControler;
