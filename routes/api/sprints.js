const express = require("express");
const { Sprint: ctrl } = require("../../controllers");
const { joiSchema } = require("../../models/sprint");
const {
  controllWrapper,
  validation,
  authorized,
} = require("../../middlewares");

const router = express.Router();

router.get("/:id", controllWrapper(ctrl.getSprint));

router.post("/", validation(joiSchema), controllWrapper(ctrl.createSprint));

router.patch("/:id",  controllWrapper(ctrl.updateSprint));

router.delete("/:id",  controllWrapper(ctrl.deleteSprint));



module.exports = router;
