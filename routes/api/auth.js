const express = require("express");

const { auth: ctrl } = require("../../controllers");
const { joiSchema } = require("../../models/user");
const {
  controllWrapper,
  validation,
  authorized,
} = require("../../middlewares");

const router = express.Router();

router.post("/signup", validation(joiSchema), controllWrapper(ctrl.register));

router.post("/login", validation(joiSchema), controllWrapper(ctrl.login));

router.post("/logout", authorized, controllWrapper(ctrl.logout));

module.exports = router;
