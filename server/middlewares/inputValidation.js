const { body } = require("express-validator");

const nameValidation = [
  body("name")
    .notEmpty()
    .withMessage("please provide feild")
    .isString()
    .withMessage("name must be string"),
];

module.exports = nameValidation;
