const express = require("express");

const { joiSchema } = require("../../models/task");
const {
  controllWrapper,
  validation,
  authorized,
} = require("../../middlewares");

const router = express.Router();

module.exports = router;
