const express = require("express");
const { projects: ctrl } = require("../../controllers");
const { joiSchema,Project } = require("../../models/project");
const {
  controllWrapper,
  validation,
  authorized,
} = require("../../middlewares");

const router = express.Router();

router.post(
  "/createNew",
  authorized,
  validation(joiSchema),
  controllWrapper(ctrl.createNewProject)
);
router.post(
  "/findParticipant",
  authorized,
  controllWrapper(ctrl.getUserByEmail)
);

router.patch(
  "/:id",
  controllWrapper(ctrl.renameProject)
);

router.patch(
  "/updateParticipants/:id",
  controllWrapper(ctrl.updateParticipants)
);

router.get("/getAll/:q", controllWrapper(ctrl.getProject));

router.get("/:id", controllWrapper(ctrl.getProjectById));

router.delete(
  "/:id",
  controllWrapper(ctrl.removeProject)
);

module.exports = router;






