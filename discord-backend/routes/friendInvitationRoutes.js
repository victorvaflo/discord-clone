const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");
const friendInvitationControllers = require("../controllers/friendInvitationControllers/friendInvitationControllers");

const postInvitationSchema = Joi.object({
  targetEmailAdress: Joi.string().email(),
});

router.post(
  "/invite",
  auth,
  validator.body(postInvitationSchema),
  friendInvitationControllers.controllers.postInvite
);

module.exports = router;
