const express = require("express");

const { joiSchema } = require("../../models/project");
const {
  controllWrapper,
  validation,
  authorized,
} = require("../../middlewares");
const { projects: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/:id", authorized, controllWrapper(ctrl.getById));

module.exports = router;
