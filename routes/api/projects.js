const express = require("express");
const { projects: ctrl } = require("../../controllers");
const { joiSchema } = require("../../models/project");
const {
  controllWrapper,
  validation,
  authorized,
} = require("../../middlewares");

const router = express.Router();

router.post("/createNew", validation(joiSchema), controllWrapper(ctrl.createNewProject));

router.patch("/:id", validation(joiSchema), controllWrapper(ctrl.renameProject));

router.get("/getAll", validation(joiSchema), controllWrapper(ctrl.getAllProjects));

router.get("/:id", validation(joiSchema), controllWrapper(ctrl.getProjectById));

router.delete("/:id", validation(joiSchema), controllWrapper(ctrl.removeProject));

module.exports = router;
