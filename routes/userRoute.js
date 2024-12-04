const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.route("/")
.post(userController.getUser)

router.route("/create")
.post(userController.createUser);

router.route("/update")
.patch(userController.updateUser);

module.exports = router;