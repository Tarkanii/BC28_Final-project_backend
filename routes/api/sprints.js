const express = require("express");

const { joiSchema } = require("../../models/sprint");
const {
  controllWrapper,
  validation,
  authorized,
} = require("../../middlewares");
const { sprints: ctrl } = require("../../controllers");
const { projects: operations } = require("../../controllers");

const router = express.Router();

router.get(
  "/",
  authorized,
  validation(joiSchema),
  controllWrapper(operations.getProjectById)
);

router.post("/", authorized, validation(joiSchema), controllWrapper(ctrl.add));

router.get(
  "/:id",
  authorized,
  validation(joiSchema),
  controllWrapper(ctrl.getById)
);

router.delete(
  "/:id",
  authorized,
  validation(joiSchema),
  controllWrapper(ctrl.removeById)
);
module.exports = router;
