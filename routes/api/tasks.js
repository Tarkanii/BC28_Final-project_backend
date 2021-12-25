const express = require("express");
const { Task: ctrl } = require("../../controllers");
const { joiSchema } = require("../../models/task");
const {
  controllWrapper,
  validation,
  authorized,
} = require("../../middlewares");

const router = express.Router();

router.get("/:id", validation(joiSchema), controllWrapper(ctrl.getTask));

router.post("/", validation(joiSchema), controllWrapper(ctrl.createTask));

router.patch("/:id", validation(joiSchema), controllWrapper(ctrl.updateTask));

router.delete("/:id", validation(joiSchema), controllWrapper(ctrl.deleteTask));

module.exports = router;
