const express = require("express");

const { joiSchema } = require("../../models/sprint");
const {
  controllWrapper,
  validation,
  authorized,
} = require("../../middlewares");

const router = express.Router();

module.exports = router;
