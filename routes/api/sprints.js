const express = require("express");

const { joiSchema } = require("../../models/sprint");
const {
  controllWrapper,
  validation,
  authorized,
} = require("../../middlewares");
const { sprints: ctrl } = require("../../controllers");

const router = express.Router();

router.get(
  "/",
  authorized,
  validation(joiSchema),
  controllWrapper(ctrl.getAll)
);

router.post("/", authorized, validation(joiSchema), controllWrapper(ctrl.add));

module.exports = router;
